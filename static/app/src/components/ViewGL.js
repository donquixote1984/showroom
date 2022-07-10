import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import event from '../utils/events';

export default class ViewGL{
    constructor(canvasRef) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000);
        this.camera.position.z = 2;

        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: true,
        });
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        const canvasSizeX = 600;
        const canvasSizeY = 600;
        this.renderer.setSize(canvasSizeX, canvasSizeY);
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed=1.0;
        // Create meshes, materials, etc.
       // this.scene.add(myNewMesh);
        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        this.scene.add( light );
        this.scene.background = new THREE.Color( 0x3e3939 );
        this.renderer.antialias = true;
        this.update();
        this.currentPath = '';

        event.on('load', path => {
            console.log(path);
            this.loadObj(path);
        })
    }

    // ******************* PUBLIC EVENTS ******************* //
    updateValue(value) {
      // Whatever you need to do with React props
    }


    clearObj() {
        for (let i = this.scene.children.length - 1; i >= 0; i--) {
        if(this.scene.children[i].isGroup)
            this.scene.remove(this.scene.children[i]);
        }
    }

    loadObj(path) {
        const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true} );
        if (path === this.currentPath) {
            return;
        }
        this.clearObj();
        this.currentPath = path;
        const objLoader = new OBJLoader();
        objLoader.load('content/' + path, obj => {
            obj.rotateY(Math.PI / 6);
            obj.traverse( function( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = material;
                }
            } );
            this.scene.add(obj);
        },  function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        console.log)
    }

    update(t) {
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.update.bind(this));
    }
}