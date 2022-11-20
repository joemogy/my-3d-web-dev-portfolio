import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import starsTexture from './stars.jpg';
import sunTexture from './sun.jpg';
import mercuryTexture from './mercury.jpg';
import venusTexture from './venus.jpg';
import earthTexture from './earth.jpg';
import moonTexture from './moon.jpg';
import marsTexture from './mars.jpg';
import jupiterTexture from './jupiter.jpg';
import saturnTexture from './saturn.jpg';
import saturnRingTexture from './saturn ring.png';
import uranusTexture from './uranus.jpg';
import uranusRingTexture from './uranus ring.png';
import neptuneTexture from './neptune.jpg';
import plutoTexture from './pluto.jpg';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.y = 36;
camera.position.setZ(256);
camera.position.setX(256);

renderer.render(scene, camera);


// torus

const geometry = new THREE.TorusGeometry(266, 1.5, 33, 111);
const material = new THREE.MeshStandardMaterial({ color: 0xff00ff, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);  

// Torus 2

const geometry2 = new THREE.TorusGeometry(269, 1.5, 33, 111);
const material2 = new THREE.MeshStandardMaterial({ color: 0xFF0000, wireframe: true });
const torus2 = new THREE.Mesh(geometry2, material2);

scene.add(torus2);

//Torus 3

const geometry3 = new THREE.TorusGeometry(272, 1.5, 33, 111);
const material3 = new THREE.MeshStandardMaterial({ color: 0xFF8C00, wireframe: true });
const torus3 = new THREE.Mesh(geometry3, material3);

scene.add(torus3);

//torus4
const geometry4 = new THREE.TorusGeometry(275, 1.5, 33, 111);
const material4 = new THREE.MeshStandardMaterial({ color: 0xFFFF00, wireframe: true });
const torus4 = new THREE.Mesh(geometry4, material4);

scene.add(torus4);

//torus5

const geometry5 = new THREE.TorusGeometry(278, 1.5, 33, 111);
const material5 = new THREE.MeshStandardMaterial({ color: 0x7FFF00, wireframe: true });
const torus5 = new THREE.Mesh(geometry5, material5);

scene.add(torus5);

//torus6
const geometry6 = new THREE.TorusGeometry(281, 1.5, 33, 111);
const material6 = new THREE.MeshStandardMaterial({ color: 0x008000, wireframe: true });
const torus6 = new THREE.Mesh(geometry6, material6);

scene.add(torus6);

//torus7
const geometry7 = new THREE.TorusGeometry(284, 1.5, 33, 111);
const material7 = new THREE.MeshStandardMaterial({ color: 0x00FFFF, wireframe: true });
const torus7 = new THREE.Mesh(geometry7, material7);

scene.add(torus7);

//torus8
const geometry8 = new THREE.TorusGeometry(287, 1.5, 33, 111);
const material8 = new THREE.MeshStandardMaterial({ color: 0x0000FF, wireframe: true });
const torus8 = new THREE.Mesh(geometry8, material8);

scene.add(torus8);

//torus9
const geometry9 = new THREE.TorusGeometry(290, 1.5, 33, 111);
const material9 = new THREE.MeshStandardMaterial({ color: 0x4B0082, wireframe: true });
const torus9 = new THREE.Mesh(geometry9, material9);

scene.add(torus9);

//torus10
const geometry10 = new THREE.TorusGeometry(293, 1.5, 33, 111);
const material10 = new THREE.MeshStandardMaterial({ color: 0x800080, wireframe: true });
const torus10 = new THREE.Mesh(geometry10, material10);

scene.add(torus10);

//torus11
const geometry11 = new THREE.TorusGeometry(296, 1.5, 33, 111);
const material11 = new THREE.MeshStandardMaterial({ color: 0xEE82EE, wireframe: true });
const torus11 = new THREE.Mesh(geometry11, material11);

scene.add(torus11);

//torus12
const geometry12 = new THREE.TorusGeometry(299, 1.5, 33, 111);
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
  const geometry = new THREE.SphereGeometry(0.1, 0.1, 0.1);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: true });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(333));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(666).fill().forEach(addStar);

// Background

 const spaceTexture = new THREE.TextureLoader().load('space.jpg');
// scene.background = spaceTexture;

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture
]);

const textureLoader = new THREE.TextureLoader();


const sunGeo = new THREE.SphereGeometry(16, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({

  map: new THREE.TextureLoader().load(sunTexture),
  wireframe: false,
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

function createPlanete(size, texture, position, ring) {
    const geo = new THREE.SphereGeometry(size, 30, 30);
    const mat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture)
    });
    const mesh = new THREE.Mesh(geo, mat);
    const obj = new THREE.Object3D();
    obj.add(mesh);
    if(ring) {
        const ringGeo = new THREE.RingGeometry(
            ring.innerRadius,
            ring.outerRadius,
            32);
        const ringMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(ring.texture),
            side: THREE.DoubleSide
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        obj.add(ringMesh);
        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI;
    }
    scene.add(obj);
    mesh.position.x = position;
    return {mesh, obj}
}

const mercury = createPlanete(3.2, mercuryTexture, 28);
const venus = createPlanete(5.8, venusTexture, 44);
const earth = createPlanete(6, earthTexture, 66);
const moon = createPlanete(1, moonTexture, 56);
const mars = createPlanete(4, marsTexture, 78);
const jupiter = createPlanete(12, jupiterTexture, 100);
const saturn = createPlanete(10, saturnTexture, 138, {
    innerRadius: 10,
    outerRadius: 20,
    texture: saturnRingTexture
});
const uranus = createPlanete(7, uranusTexture, 176, {
    innerRadius: 7,
    outerRadius: 12,
    texture: uranusRingTexture
});
const neptune = createPlanete(7, neptuneTexture, 200);
const pluto = createPlanete(2.8, plutoTexture, 216);


//background
//inverse sphere with space.jpg seen on inside

const geometry25 = new THREE.SphereGeometry( 777, 192, 108, 0, Math.PI * 2, 0, Math.PI );
const material25 = new THREE.MeshBasicMaterial({map: spaceTexture, side: THREE.BackSide, wireframe: false} );
const sphere = new THREE.Mesh( geometry25, material25 );
scene.add( sphere );

// Avatar

//joe

const joeTexture = new THREE.TextureLoader().load('joe.png');

const joe = new THREE.Mesh(new THREE.BoxGeometry(36, 69, 36), new THREE.MeshBasicMaterial({ map: joeTexture }));

scene.add(joe);

//joseph

const josephTexture = new THREE.TextureLoader().load('joseph.png');

const joseph = new THREE.Mesh(new THREE.BoxGeometry(36, 36, 36), new THREE.MeshBasicMaterial({ map: josephTexture }));

scene.add(joseph);


// Moon 2

const moon2Texture = new THREE.TextureLoader().load('moon.jpg');

const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon2 = new THREE.Mesh(new THREE.SphereGeometry(3, 11, 11), new THREE.MeshStandardMaterial({map: moon2Texture,normalMap: normalTexture,}));

scene.add(moon2);



//object positionings

moon2.position.setX(99);
moon2.position.y = 99;
moon2.position.z = 99;

joseph.position.setX(33);
joseph.position.y = 48;
joseph.position.z = -36;

joe.position.setX(-66);
joe.position.y = 66;
joe.position.z = 99;

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
  
  moon2.rotation.x += 0.03;
  moon2.rotation.y += 0.03;
  moon2.rotation.z += 0.03;

  joseph.rotation.x += 0.01;
  joseph.rotation.y += 0.01;
  joseph.rotation.z += 0.01;

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

    //Self-rotation
    sun.rotateY(0.004);
    mercury.mesh.rotateY(0.004);
    venus.mesh.rotateY(0.002);
    earth.mesh.rotateY(0.02);
    moon.mesh.rotateY(0.02);
    mars.mesh.rotateY(0.018);
    jupiter.mesh.rotateY(0.04);
    saturn.mesh.rotateY(0.038);
    uranus.mesh.rotateY(0.03);
    neptune.mesh.rotateY(0.032);
    pluto.mesh.rotateY(0.008);

    //Around-sun-rotation
    mercury.obj.rotateY(0.04);
    venus.obj.rotateY(0.015);
    earth.obj.rotateY(0.01);
    moon.obj.rotateY(0.01);
    mars.obj.rotateY(0.008);
    jupiter.obj.rotateY(0.002);
    saturn.obj.rotateY(0.0009);
    uranus.obj.rotateY(0.0004);
    neptune.obj.rotateY(0.0001);
    pluto.obj.rotateY(0.00007);


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


  moon2.rotation.x += 0.0006;
  moon2.rotation.y += 0.006;
  moon2.rotation.z += 0.0006;
  
  joe.rotation.x += 0.0003;
  joe.rotation.y += 0.003;
  joe.rotation.z += 0.0003;

  joseph.rotation.x += 0.0003;
  joseph.rotation.y += 0.003;
  joseph.rotation.z += 0.0003;


  //controls.update();
renderer.render(scene, camera);
  
}

animate();

