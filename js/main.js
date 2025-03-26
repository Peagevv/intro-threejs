import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Geometría y material para las líneas de los bordes
const geometry = new THREE.BoxGeometry(1, 1, 1);
const edgesGeometry = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff }); // Color blanco para las líneas
const lines = new THREE.LineSegments(edgesGeometry, lineMaterial);
scene.add(lines);

camera.position.z = 5;

function animate() {
    lines.rotation.x += 0.01; // Rotación de las líneas
    lines.rotation.y += 0.01;

    renderer.render(scene, camera);
}
