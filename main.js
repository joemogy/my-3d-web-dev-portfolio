import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.y = 12;
camera.position.setZ(33);
camera.position.setX(-33);

renderer.render(scene, camera);

//GEOMETRY
// give torus randome color   

function addTorus(size = 1 , ){
  const geometry = new THREE.TorusGeometry(size, 3, 33, 111);
  const material = new THREE.MeshStandardMaterial({ color: color, wireframe: true });
  const torus = new THREE.Mesh(geometry, material);

  torus.position.set(0, 0, 0);
  scene.add(torus);
  return torus;
  
}
// give torus random color 
//change torus color on click

const color = Math.random(+444) * 0xffffff;
const color2 = Math.random(+333) * 0xffffff;
const color3 = Math.random(+222) * 0xffffff;
const color4 = Math.random(+111) * 0xffffff;

//const color5 = Math.random() * 0xffffff;

const torus = addTorus(42, color);
const torus2 = addTorus(48, color2);
const torus3 = addTorus(54, color3);
const torus4 = addTorus(60, color4);
//const torus5 = addTorus(66, color5);
// Torus

// const geometry = new THREE.TorusGeometry(42, 3, 33, 111);
// const material = new THREE.MeshStandardMaterial({ color: 0xffff00, wireframe: true });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);  


//Torus 2

// const geometry2 = new THREE.TorusGeometry(48, 3, 33, 111);
// const material2 = new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: true });
// const torus2 = new THREE.Mesh(geometry2, material2);

// scene.add(torus2);

// //Torus 3

// const geometry3 = new THREE.TorusGeometry(54, 3, 33, 111);
// const material3 = new THREE.MeshStandardMaterial({ color: 0x0B5394, wireframe: true });
// const torus3 = new THREE.Mesh(geometry3, material3);

// scene.add(torus3);

// const geometry4 = new THREE.TorusGeometry(60, 3, 33, 111);
// const material4 = new THREE.MeshStandardMaterial({ color: 0xff00ff, wireframe: true });
// const torus4 = new THREE.Mesh(geometry4, material4);

// scene.add(torus4);

// const geometry5 = new THREE.TorusGeometry(66, 3, 33, 111);
// const material5 = new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: true });
// const torus5 = new THREE.Mesh(geometry5, material5);

// scene.add(torus5);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(6, 6, 6);

const ambientLight = new THREE.AmbientLight(0xfffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.333, 0.333, 0.333);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: true });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(333));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(333).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

// Avatar

const joeTexture = new THREE.TextureLoader().load('joe.jpg');

const joe = new THREE.Mesh(new THREE.BoxGeometry(12, 12, 12), new THREE.MeshBasicMaterial({ map: joeTexture }));

scene.add(joe);

// Moon

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(18, 99, 99),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

//object positionings

moon.position.setX(-21);
moon.position.y = 15;
moon.position.z = 21;

torus.position.setX(-15);
torus.position.y = 15;
torus.position.z = 0;


torus2.position.setX(-15);
torus2.position.y = 15;
torus2.position.z = 0;

torus3.position.setX(-15);
torus3.position.y = 15;
torus3.position.z = 0;

torus4.position.setX(-15);
torus4.position.y = 15;
torus4.position.z = 0;

// torus5.position.setX(-15);
// torus5.position.y = 15;
// torus5.position.z = 0;

joe.position.setX(9);
joe.position.y = 15;
joe.position.z = -15;
// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  
  moon.rotation.x += 0.01;
  moon.rotation.y += 0.01;
  moon.rotation.z += 0.01;

  joe.rotation.x += 0.01;
  joe.rotation.y += 0.01;
  joe.rotation.z += 0.01;

  camera.position.x = t * -0.001;
  camera.rotation.y = t * -0.001;
  camera.position.z = t * -0.01;
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
function navToWork() {
  document.getElementById("work").scrollIntoView();
}
function navToContactMe() {
  document.getElementById("contactMe").scrollIntoView();
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

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.0006;
  torus.rotation.y += 0.006;
  torus.rotation.z += 0.0006;

  torus2.rotation.x += 0.006;
  torus2.rotation.y += 0.0006;
  torus2.rotation.z += 0.0006;

  torus3.rotation.x += -0.0006;
  torus3.rotation.y += -0.006;
  torus3.rotation.z += -0.0006;

  torus4.rotation.x += -0.006;
  torus4.rotation.y += -0.0006;
  torus4.rotation.z += -0.0006;

  // torus5.rotation.x += 0.00053;
  // torus5.rotation.y += 0.0053;
  // torus5.rotation.z += 0.00053;
 
  moon.rotation.x += 0.001;
  moon.rotation.y += 0.01;
  moon.rotation.z += 0.001;
  
  joe.rotation.x += 0.0003;
  joe.rotation.y += 0.003;
  joe.rotation.z += 0.0003;

  //controls.update();
renderer.render(scene, camera);
  
}

animate();

