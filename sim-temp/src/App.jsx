import { useEffect } from 'react'
import * as THREE from 'three'
import { Sim } from './Sim'
import VSounds from 'vsounds'

import './App.css'

function App({ container }) {
  useEffect(()=>{
    if(!container)
    {
      console.error(`[${__APP_NAME__}] Cannot init simulation app – invalid container`);
      return;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create custom camera
    const fov = 75;
    const aspect = width / height;
    const near = 0.1;
    const far = 1000.0;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xF5F5F5, 1);
    //renderer.setPixelRatio( 2.0); INCREASE QUALITY

    //Resize window
    var onWindowResize = function()
    {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      camera.aspect = container.offsetWidth/container.offsetHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', onWindowResize);

    container.appendChild(renderer.domElement);

    // Scenes manager
    const scenesManager = new VSounds.VSSimsManager(renderer, camera, container);
    scenesManager.setSimulation(Sim);

    //Game logic
    var update = function()
    {
      scenesManager.update();
    }

    //Run game loop (update, render, repeat)
    var GameLoop = function()
    {
      requestAnimationFrame(GameLoop);
      update();

    }

    GameLoop();
   
  },[container]);

  return;
}

export default App;
