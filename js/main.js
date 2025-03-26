import * as THREE from 'three';

// Crear la escena y la cámara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Cargar la textura
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('https://threejs.org/examples/textures/brick_diffuse.jpg'); // URL de la textura

// Crear la geometría del cubo
const geometry = new THREE.BoxGeometry(3, 3, 3);

// Crear el material con la textura
const material = new THREE.MeshBasicMaterial({ map: texture });

// Crear el cubo con textura
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Agregar líneas al cubo
const edgesGeometry = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const lines = new THREE.LineSegments(edgesGeometry, lineMaterial);
scene.add(lines);

// Posicionar la cámara
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

function animate() {
    cube.rotation.y += 0.01; // Rotación del cubo
    lines.rotation.y += 0.01; // Rotación de las líneas para coincidir

    renderer.render(scene, camera);
}
