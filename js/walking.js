var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			// var geometry = new THREE.SphereGeometry( 1, 4, 1 );
			var geometry = new THREE.SphereGeometry( 5, 32, 32 );
			var geometry1 = new THREE.SphereGeometry( 4, 12, 12 );
			var material = new THREE.MeshBasicMaterial( { color: 'blue', wireframe:true } );
			// var material = new THREE.MeshBasicMaterial( { color: 'blue' } );
			var cube = new THREE.Mesh( geometry, material );
            // var cube = new THREE.Mesh( spheregeometry, material );
            var cube1 = new THREE.Mesh(geometry, material);
			scene.add( cube );
			scene.add( cube1 );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				// cube.rotation.y += 0.01;
				// cube1.rotation.x += -0.01;
				// cube1.rotation.y += -0.01;

				renderer.render( scene, camera );
			};



