import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(33);
camera.position.setX(-33);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(33, 3, 33, 333);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.03, 3, 3);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(99));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(666).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

// Avatar

const joeTexture = new THREE.TextureLoader().load('joe.jpg');

const joe = new THREE.Mesh(new THREE.BoxGeometry(9, 9, 9), new THREE.MeshBasicMaterial({ map: joeTexture }));

scene.add(joe);

// Moon

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(6, 66, 66),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 16;
moon.position.setX(-10);

joe.position.z = -15;
joe.position.x = 3;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  joe.rotation.y += 0.03;
  joe.rotation.z += 0.03;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0001;
  camera.rotation.y = t * -0.0001;
}

document.body.onscroll = moveCamera;
moveCamera();

//navigate to different sections of document on click nav bar links direct the user to the correctly named id section of the document    
function navToAbout() {
  document.getElementById("about").scrollIntoView();
}   
function navToProjects() {
  document.getElementById("projects").scrollIntoView();
}

function navToContact() {
  document.getElementById("contact").scrollIntoView();
}
//RESIZE SCREEN
function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
//resize window event listener
window.addEventListener('resize', resize, false);   
init();

//resize animation
function init() {
  animate();
  resize();
}


//scroll to top of page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.03;
  torus.rotation.y += 0.0003;
  torus.rotation.z += 0.03;

  moon.rotation.x += 0.006;

  // controls.update();

  renderer.render(scene, camera);
}

animate();

