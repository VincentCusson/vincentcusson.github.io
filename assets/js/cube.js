var camera, scene, renderer;
var geometry, material, mesh;



init();

animate();
renderer.render(scene, camera);

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
//   geometry = new THREE.BoxGeometry(1, 1, 1);
//   material = new THREE.MeshNormalMaterial();
//   mesh = new THREE.Mesh(geometry, material);
//   scene.add(mesh);

  loadTeapot();

  // grid
  scene.add(new THREE.GridHelper(5, 10));


  camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10); // see params
  camera.position.z = 2;



  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  // control
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target = new THREE.Vector3(0, 0.3, 0);
  controls.maxPolarAngle = Math.PI / 2;
  controls.update();

}


function animate() {
  requestAnimationFrame(animate);
  controls.update();
  //mesh.rotation.x += 0.005;
  //mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}


// load teapot model and shader material
function loadTeapot(){

    // loading model
    // teapot model loading aided by THREE.js
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
    };
    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };
    var onError = function ( xhr ) {};

    // // loading shaders
    // var vertShader = document.getElementById('vertexshader').innerHTML;
    // var fragShader = document.getElementById('fragmentshader').innerHTML;
    // uniforms = {
    //     amplitude: {
    //         type: 'f',
    //         value: 0
    //     }
    // };
    // teapotMaterial = new THREE.ShaderMaterial({
    //     uniforms: uniforms,
    //     vertexShader: vertShader,
    //     fragmentShader: fragShader
    // });
    material = new THREE.MeshNormalMaterial();

    var tpLoader = new THREE.OBJLoader(manager);
    tpLoader.load('/images/tube.obj', function(object) {
        var mesh;
        object.scale.multiplyScalar(2);
        object.traverse(function(child){
            if (child instanceof THREE.Mesh) {
                child.material = material;
                mesh = child;
            }
        });

        // // teapot model is refined first
        // var rawTeapotGeometry = mesh.geometry;
        // teapotGeometry = new THREE.Geometry().fromBufferGeometry(mesh.geometry);
        // teapotGeometry.mergeVertices();
        // var modifier = new THREE.SubdivisionModifier(0);
        // modifier.modify( teapotGeometry );
        // currentTeapotGeometry = new THREE.BufferGeometry().fromGeometry(teapotGeometry)

        // // adding attributes to geometry of teapot
        // verts = currentTeapotGeometry.attributes.position.count;
        // distance = new Float32Array( verts );
        // surfaceNormal = new Float32Array( verts * 3 );
        // currentTeapotGeometry.addAttribute('distance', new THREE.BufferAttribute(distance, 1));
        // currentTeapotGeometry.addAttribute('surfaceNormal', new THREE.BufferAttribute(surfaceNormal, 3));

        // insert the teapot object into scene
        //var teapot = new THREE.Mesh(currentTeapotGeometry, teapotMaterial);
        geometry = mesh.geometry;
        
        var teapot = new THREE.Mesh(geometry, material);
        teapot.name = 'teapot';
        scene.add(teapot);
    }, onProgress, onError);
};