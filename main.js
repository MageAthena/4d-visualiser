window.onload = init;

function init(){
	startScene()
	createPentachoron()

	animate();
}

function startScene(){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	controls = new THREE.OrbitControls( camera, renderer.domElement );
}

function createPentachoron(){
	const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	const cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	camera.position.z = 5;
}

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

var scene;
var camera;
var render;
var controls;