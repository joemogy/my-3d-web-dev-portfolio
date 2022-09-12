import './style.css'

import * as THREE from 'three'

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera( 75, window.innerwidth / windos.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera );

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true } );
const torus = new THREE.Mesh( geometry, material );

scene.add(torus)

const pointLight = new THREE.PointLight(0xFFffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50)
scene.add(lightHelper, gridHelper)

function animate() {
    requestAnimationFrame( animate );

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    
    renderer.render( scene, camera );
}