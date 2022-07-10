
import $ from 'jquery';

import AssetStore from './assetStore';
import Ctrls from './ctrls';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './scss/main.scss';
import {controls, renderer, scene, camera} from './global'

const assetStore = new AssetStore();
const ctrls = new Ctrls();

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}
animate();