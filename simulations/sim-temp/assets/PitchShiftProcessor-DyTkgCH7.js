class PitchShiftProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: 'pitchRatio',
        defaultValue: 1.0,
        minValue: 0.2,
        maxValue: 2.0,
        automationRate: 'k-rate'
      }
    ];
  }

  constructor() {
    super();
    // MASSIVE buffer - 4 seconds at 48kHz
    this.bufferSize = 192000;
    this.buffers = [];
    this.writeIndices = [];
    this.readPositions = [];
    this.initialized = [];
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    const output = outputs[0];
    if (!input || input.length === 0) return true;
  
    // Clamp pitch ratio to safe range
    const pitchRatio = Math.max(0.2, Math.min(2.0, parameters.pitchRatio[0]));
  
    for (let channel = 0; channel < input.length; channel++) {
      // Initialize buffer for this channel if needed
      if (!this.buffers[channel]) {
        this.buffers[channel] = new Float32Array(this.bufferSize);
        this.writeIndices[channel] = 0;
        this.readPositions[channel] = 0;
        this.initialized[channel] = false;
      }

      const inputChannel = input[channel];
      const outputChannel = output[channel];
      const buffer = this.buffers[channel];
      let writeIndex = this.writeIndices[channel];
      let readPosition = this.readPositions[channel];
  
      for (let i = 0; i < inputChannel.length; i++) {
        // Always write input to circular buffer first
        buffer[writeIndex] = inputChannel[i];
        writeIndex = (writeIndex + 1) % this.bufferSize;
        
        // Wait for buffer to fill to 70% before starting playback
        // This gives us MASSIVE room both backward and forward
        // 70% filled = we can look 70% back and 30% forward
        const fillThreshold = Math.floor(this.bufferSize * 0.7);
        
        if (!this.initialized[channel]) {
          if (writeIndex >= fillThreshold) {
            this.initialized[channel] = true;
            // Start reading from the very beginning
            // This means we have 70% of buffer AHEAD of us for pitch up
            readPosition = 0;
            console.log(`Channel ${channel} initialized. Buffer size: ${this.bufferSize}, Write at: ${writeIndex}, Read at: ${readPosition}`);
          } else {
            // Still buffering, output silence
            outputChannel[i] = 0;
            continue;
          }
        }
  
        // Read from buffer with interpolation
        const readIndex = Math.floor(readPosition) % this.bufferSize;
        const nextIndex = (readIndex + 1) % this.bufferSize;
        const frac = readPosition - Math.floor(readPosition);
  
        const sample0 = buffer[readIndex];
        const sample1 = buffer[nextIndex];
        outputChannel[i] = (1 - frac) * sample0 + frac * sample1;
  
        // Advance read position by pitch ratio
        readPosition += pitchRatio;
        
        // Wrap read position within buffer bounds
        while (readPosition >= this.bufferSize) {
          readPosition -= this.bufferSize;
        }
        
        // Calculate distance between read and write positions
        const distance = (writeIndex - readPosition + this.bufferSize) % this.bufferSize;
        
        // VERY generous safe zones with huge headroom
        // For looking back (pitch down): allow up to 80% of buffer behind
        // For looking forward (pitch up): allow up to 20% of buffer ahead
        const minSafeDistance = this.bufferSize * 0.15; // 15% minimum - plenty of forward room
        const maxSafeDistance = this.bufferSize * 0.85; // 85% maximum - tons of backward room
        const targetDistance = this.bufferSize * 0.5;   // Reset to dead center
        
        // If we've drifted outside safe zone, reset to target
        if (distance < minSafeDistance || distance > maxSafeDistance) {
          console.warn(`Channel ${channel} drift detected! Distance: ${distance}, Min: ${minSafeDistance}, Max: ${maxSafeDistance}, PitchRatio: ${pitchRatio}`);
          readPosition = (writeIndex - targetDistance + this.bufferSize) % this.bufferSize;
          console.log(`Reset read position to ${readPosition}, write at ${writeIndex}`);
        }
      }

      this.writeIndices[channel] = writeIndex;
      this.readPositions[channel] = readPosition;
    }
  
    return true;
  }
}

registerProcessor('pitch-shift-processor', PitchShiftProcessor);