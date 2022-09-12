import './style.css'

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { arraySlice } from 'three/src/animation/AnimationUtils';

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

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
    const geometry = THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial( { color: 0xffffff })
    const star = new THREE.Mesh( geometry, material );

    const [x, y, z] =Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );

    star.position.set(x, y, z);
    scene.add(star)
}

array(200).fill().forEach(addStar)


const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

function animate() {
    requestAnimationFrame( animate );

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    
    controls.update();
    
    renderer.render( scene, camera );
}

animate()

//Avatar
const joeTexture = new THREE.TextureLoader().load('joe.png');

const joe = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial( { map: joeTexture } )
);

scene.add(joe);

//Moon
const moonTexture = new THREE.TextureLoader().load('Moon.png');

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3,33,33),
    new THREE.MeshStandardMaterial( {
        map: moonTexture,
        normalMap: normalTexture
    } )
);

scene.add(moon);
