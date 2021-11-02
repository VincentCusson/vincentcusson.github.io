var camera, scene, renderer;
var geometry, material, mesh;


init();
animate();



function init() {
  var container = document.getElementById("cube");
  var width = container.clientWidth;
  var height = container.clientHeight;
  
  var params = { rpm_x: 7.0, rpm_y: -5.0, rpm_z: 0.0 };
  var gui = new dat.GUI({ autoPlace: false });
  gui.add(params, "rpm_x", -10, 10).step(1);
  gui.add(params, "rpm_y", -10, 10).step(1);
  gui.add(params, "rpm_z", -10, 10).step(1);
  gui.close();
  document.getElementById("param").appendChild(gui.domElement);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshNormalMaterial();
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  
  camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
  camera.position.z = 2;

  
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);
}


function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
