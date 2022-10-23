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
  const material = new THREE.MeshStandardMaterial({ color: color1, wireframe: true });
  const torus = new THREE.Mesh(geometry, material);

  torus.position.set(0, 0, 0);
  scene.add(torus);
  return torus;
  
}
// give torus random color USIng Math

const color1 = 0xff00ff;
const color2 = 0xFF0000;
const color3 = 0xFF8C00;
const color4 = 0xFFFF00;
const color5 = 0x7FFF00;
const color6 = 0x008000;
const color7 = 0x00FFFF;
const color8 = 0x0000FF;
const color9 = 0x4B0082;
const color10 = 0x800080;
const color11 = 0xEE82EE;
const color12 = 0xff00ff;






// const torus = addTorus(42, color1);
// const torus2 = addTorus(48,color2);
// const torus3 = addTorus(54, color3);
// const torus4 = addTorus(60, color4);
// const torus5 = addTorus(66, color5);
// const torus6 = addTorus(72, color6);
// const torus7 = addTorus(78, color7);
// const torus8 = addTorus(84, color8);

// torus

const geometry = new THREE.TorusGeometry(66, 1, 33, 111);
const material = new THREE.MeshStandardMaterial({ color: 0xff00ff, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);  


// Torus 2

const geometry2 = new THREE.TorusGeometry(69, 1, 33, 111);
const material2 = new THREE.MeshStandardMaterial({ color: 0xFF0000, wireframe: true });
const torus2 = new THREE.Mesh(geometry2, material2);

scene.add(torus2);

//Torus 3

const geometry3 = new THREE.TorusGeometry(72, 1, 33, 111);
const material3 = new THREE.MeshStandardMaterial({ color: 0xFF8C00, wireframe: true });
const torus3 = new THREE.Mesh(geometry3, material3);

scene.add(torus3);

//torus4
const geometry4 = new THREE.TorusGeometry(75, 1, 33, 111);
const material4 = new THREE.MeshStandardMaterial({ color: 0xFFFF00, wireframe: true });
const torus4 = new THREE.Mesh(geometry4, material4);

scene.add(torus4);

//torus5

const geometry5 = new THREE.TorusGeometry(78, 1, 33, 111);
const material5 = new THREE.MeshStandardMaterial({ color: 0x7FFF00, wireframe: true });
const torus5 = new THREE.Mesh(geometry5, material5);

scene.add(torus5);

//torus6
const geometry6 = new THREE.TorusGeometry(81, 1, 33, 111);
const material6 = new THREE.MeshStandardMaterial({ color: 0x008000, wireframe: true });
const torus6 = new THREE.Mesh(geometry6, material6);

scene.add(torus6);

//torus7
const geometry7 = new THREE.TorusGeometry(84, 1, 33, 111);
const material7 = new THREE.MeshStandardMaterial({ color: 0x00FFFF, wireframe: true });
const torus7 = new THREE.Mesh(geometry7, material7);

scene.add(torus7);

//torus8
const geometry8 = new THREE.TorusGeometry(87, 1, 33, 111);
const material8 = new THREE.MeshStandardMaterial({ color: 0x0000FF, wireframe: true });
const torus8 = new THREE.Mesh(geometry8, material8);

scene.add(torus8);

//torus9
const geometry9 = new THREE.TorusGeometry(90, 1, 33, 111);
const material9 = new THREE.MeshStandardMaterial({ color: 0x4B0082, wireframe: true });
const torus9 = new THREE.Mesh(geometry9, material9);

scene.add(torus9);

//torus10
const geometry10 = new THREE.TorusGeometry(93, 1, 33, 111);
const material10 = new THREE.MeshStandardMaterial({ color: 0x800080, wireframe: true });
const torus10 = new THREE.Mesh(geometry10, material10);

scene.add(torus10);

//torus11
const geometry11 = new THREE.TorusGeometry(96, 1, 33, 111);
const material11 = new THREE.MeshStandardMaterial({ color: 0xEE82EE, wireframe: true });
const torus11 = new THREE.Mesh(geometry11, material11);

scene.add(torus11);

//torus12
const geometry12 = new THREE.TorusGeometry(99, 1, 33, 111);
const material12 = new THREE.MeshStandardMaterial({ color: 0xff00ff, wireframe: true });
const torus12 = new THREE.Mesh(geometry12, material12);

scene.add(torus12);


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(6, 6, 6);

const ambientLight = new THREE.AmbientLight(0xffffcc);
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

joe.position.setX(9);
joe.position.y = 15;
joe.position.z = -15;

torus.position.setX(-15);
torus.position.y = 15;
torus.position.z = 3;


torus2.position.setX(-15);
torus2.position.y = 15;
torus2.position.z = 3;

torus3.position.setX(-15);
torus3.position.y = 15;
torus3.position.z = 3;

torus4.position.setX(-15);
torus4.position.y = 15;
torus4.position.z = 3;

torus5.position.setX(-15);
torus5.position.y = 15;
torus5.position.z = 3;

torus6.position.setX(-15);
torus6.position.y = 15;
torus6.position.z = 3;

torus7.position.setX(-15);
torus7.position.y = 15;
torus7.position.z = 3;

torus8.position.setX(-15);
torus8.position.y = 15;
torus8.position.z = 3;

torus9.position.setX(-15);
torus9.position.y = 15;
torus9.position.z = 3;

torus10.position.setX(-15);
torus10.position.y = 15;
torus10.position.z = 3;

torus11.position.setX(-15);
torus11.position.y = 15;
torus11.position.z = 3;

torus12.position.setX(-15);
torus12.position.y = 15;
torus12.position.z = 3;


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

  torus.rotation.x += 0.003;
  torus.rotation.y += 0.0003;
  torus.rotation.z += 0.0003;

  torus2.rotation.x += -0.003;
  torus2.rotation.y += 0.0003;
  torus2.rotation.z += 0.0003;

  torus3.rotation.x += 0.003;
  torus3.rotation.y += -0.0003;
  torus3.rotation.z += 0.0003;

  torus4.rotation.x += -0.003;
  torus4.rotation.y += -0.0003;
  torus4.rotation.z += -0.0003;

  torus5.rotation.x += 0.0003;
  torus5.rotation.y += 0.003;
  torus5.rotation.z += 0.0003;
 
  torus6.rotation.x += -0.0003;
  torus6.rotation.y += 0.003;
  torus6.rotation.z += 0.0003;

  torus7.rotation.x += 0.0003;
  torus7.rotation.y += -0.003;
  torus7.rotation.z += -0.0003;

  torus8.rotation.x += -0.0003;
  torus8.rotation.y += -0.003;
  torus8.rotation.z += -0.0003;

  torus9.rotation.x += 0.0003;
  torus9.rotation.y += 0.0003;
  torus9.rotation.z += 0.003;

  torus10.rotation.x += -0.0003;
  torus10.rotation.y += 0.0003;
  torus10.rotation.z += 0.003;

  torus11.rotation.x += 0.0003;
  torus11.rotation.y += -0.0003;
  torus11.rotation.z += -0.003;

  torus12.rotation.x += -0.0003;
  torus12.rotation.y += -0.0003;
  torus12.rotation.z += -0.003;


  moon.rotation.x += 0.0003;
  moon.rotation.y += 0.003;
  moon.rotation.z += 0.0003;
  
  joe.rotation.x += 0.0003;
  joe.rotation.y += 0.003;
  joe.rotation.z += 0.0003;

  //controls.update();
renderer.render(scene, camera);
  
}

animate();

