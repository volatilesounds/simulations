import * as THREE from 'three'
import VSounds from 'vsounds'

// Temp scene
export class Sim extends VSounds.VSSimBase {
  onEnter() {
    // Low intensity ambient light
    const ambient = new THREE.AmbientLight(0xffffff, 0.25);
    this.scene.add(ambient);

    // Cube geometry
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshLambertMaterial( { color: 0x252525} );
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add( this.cube );

    //Point light
    const light = new THREE.DirectionalLight(0xffffff, 5.0);
    this.scene.add(light);

    // Params
    this.gui.addParams({
      cubeSize: {
        value: 1,
        min: 0.5,
        max: 3,
        step: 0.1,
        label: "Cube Size",
        onChange: (v) => {
          this.cube.scale.set(v, v, v);
        }
      }
    }, true); // this will show params


    // GROUND
    // const groundGeo = new THREE.PlaneGeometry( 10000, 10000 );
    // const groundMat = new THREE.MeshStandardMaterial({
    //   color: 0xe6e2d3, // light warm gray
    //   roughness: 0.9,
    //   metalness: 0.0
    // });

    // const ground = new THREE.Mesh( groundGeo, groundMat );
    // ground.position.y = - 33;
    // ground.rotation.x = - Math.PI / 2;
    // ground.receiveShadow = true;
    // this.scene.add( ground );

    // Helpers
    // const lightHelper = new THREE.DirectionalLightHelper(light, 5);
    // this.scene.add(lightHelper);
    // this.scene.add(new THREE.AxesHelper(5));
  }

  onAudioStart() {
    // Main sine wave
    const { osc, gainNode } = this.audioEngine.createOscillator( "sine", 220, this.audioBus);
    this.osc = osc;
    this.gain = gainNode;
  }

  update(dt) {
    this.cube.rotation.x += (0.5 * dt);
    this.cube.rotation.y += (0.5 * dt);

    // Draw debug info
    this.debugOverlay.addTextCategory("Cube", "Rotation", `${this.cube.rotation.x.toFixed(2)}, ${this.cube.rotation.y.toFixed(2)}, ${this.cube.rotation.z.toFixed(2)}`);
    this.debugOverlay.addTextCategory("Cube", "Size", this.cube.scale.x.toFixed(2));
    this.debugOverlay.update();
  }

  onExit() {
    this.scene.background = null
  }
}