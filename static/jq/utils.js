import * as THREE from 'three';
import {Scene} from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import {scene} from './global';
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true} );

export function clearObj() {
	for (let i = scene.children.length - 1; i >= 0; i--) {
    if(scene.children[i].isGroup)
        scene.remove(scene.children[i]);
	}
}
let currentPath;
export function loadObj(path) {
	
	if (path === currentPath) {
		return;
	}
	clearObj();
	currentPath = path;
	const objLoader = new OBJLoader();
	objLoader.load(path, obj => {
		obj.rotateY(Math.PI / 6);
		obj.traverse( function( child ) {
            if ( child instanceof THREE.Mesh ) {
                child.material = material;
            }
        } );
	    scene.add(obj);
	}, 	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// called when loading has errors
	console.log)
}
