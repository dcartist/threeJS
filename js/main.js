
function init() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, //field of view, how much of the scene that we are seeing
         window.innerWidth / window.innerHeight, //aspect window scenes
          0.1, //near and far distances
          1000 );
    var renderer = new THREE.WebGLRenderer(); 
    //you need to append the dom element to view the render
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    
    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    
    camera.position.z = 5;
    
}

init();