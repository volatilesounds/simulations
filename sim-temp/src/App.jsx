import { useEffect } from 'react'
import * as THREE from 'three'
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

    // Create scene
    const scene = new THREE.Scene();

    // Low intensity ambient light
    const ambient = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambient);

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

    container.appendChild(renderer.domElement);

    //Resize window
    var onWindowResize = function()
    {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      camera.aspect = container.offsetWidth/container.offsetHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', onWindowResize);

    // Initialize the game
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshLambertMaterial( { color: 0x252525} );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    //Point light
    const light = new THREE.DirectionalLight(0xffffff, 5.0);
    scene.add(light);
  
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
    // scene.add( ground );

    // Helpers
    // const lightHelper = new THREE.DirectionalLightHelper(light, 5);
    // scene.add(lightHelper);
    // scene.add(new THREE.AxesHelper(5));
    

    //Game logic
    var update = function()
    {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    }

    //Draw scene
    var render = function()
    {
      renderer.render(scene, camera);
    }

    //Run game loop (update, render, repeat)
    var GameLoop = function()
    {
      requestAnimationFrame(GameLoop);

      update();
      render();

    }

    GameLoop();
   
  },[container]);

  return;
}

export default App;
