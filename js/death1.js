// Inicialización de Three.js
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Configuración de la cámara y la iluminación
camera.position.z = 5;

var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

var loader = new THREE.OBJLoader(); // Utiliza el loader correspondiente a tu formato de modelo

loader.load('../../../assets/diamant_detector.obj', function(object) {
  scene.add(object);
});

function animate() {
    requestAnimationFrame(animate);
  
    // Realiza las actualizaciones necesarias en tu modelo 3D aquí
  
    renderer.render(scene, camera);
  }
  
  animate();
  