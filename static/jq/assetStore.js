import {loadObj} from './utils';
import $ from 'jquery';
import assets from './assetData';
const commonParams = {
	camera360: true,
	camera4: false,
	frontlight: null,
	backlight: null,
	background: null,
	lightIntensity: 1, 
	quality: 1,
};
const layouts = {
	'DEFAULT': 'DEFAULT',
	'GRID4': 'GRID4',
	'HORIZONTAL': 'HORIZONTAL',
	'VERTICAL': 'VERTICAL',
	'DIAGONAL': 'DIAGONAL',
	'DIAGONAL_RIGHT': 'DIAGONAL_RIGHT'
}

export default class AssetStore {
	constructor() {
		const container = $('#asset-store');

		const ul = container.find('>ul');
		assets.forEach((asset) => {
			const image = '/static/thumbnails/' + asset.thumbnail;
			const li = $(`<li class="asset"><a href='javascript: void(0)'><img src='${image}' class='asset-image'/><div class='asset-name'>${asset.name}</div></a></li>`);
			ul.append(li);
			li.data("asset", asset);
		});

		ul.on('click', '>li', (e) => {
			ul.find('a').removeClass('active');
			const li = $(e.currentTarget);
			const asset = li.data('asset');
			const objPath = asset.path;
			li.find('a').addClass('active');
			loadObj('/static/content' + objPath);
		})


	}
}