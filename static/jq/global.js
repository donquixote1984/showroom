import * as THREE from 'three';
import {Scene} from 'three';
import $ from 'jquery';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
export const scene = new Scene();
export const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000);

const canvasSizeX = 600;
const canvasSizeY = 600;
export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(canvasSizeX, canvasSizeY);
document.querySelector('#mesh-viewer').appendChild(renderer.domElement);

camera.position.z = 2;

export const controls = new OrbitControls(camera, renderer.domElement)
//controls.enableDamping = true
//controls.target.set(0, 1, 0)
controls.autoRotate = true;
controls.autoRotateSpeed=1.0;

//const material = new THREE.MeshNormalMaterial()
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );



scene.background = new THREE.Color( 0x3e3939 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );

renderer.antialias = true;

