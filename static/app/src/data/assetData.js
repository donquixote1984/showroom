import { layoutParams, materialParams, SofaParams, CabParams, dinnerParams} from './params';
import {SofaMaterials, CabinetMaterials, DinnerAssets} from './materials';
export const asset2 = [
	{
		id: 'single_sofa',
		path: '/demo2/geo/single_sofa.obj',
		thumbnail: 'single_sofa.png',
		name: 'Sofa',
		mock: true,
		proj: 'demo2',
		params: [materialParams(SofaMaterials), SofaParams]

	}, {
		id: 'single_cabinet',
		path: '/demo2/geo/single_cabinet.obj',
		name: 'Cabinet',
		proj: 'demo2',
		thumbnail: 'cabinet.png',
		params: [materialParams(CabinetMaterials), CabParams],
		mock: true
	}, {
		id: 'dinner_set',
		path: '/demo2/geo/dinner_set.obj',
		name: 'Dinner Set',
		proj: 'demo2',
		mock: true,
		thumbnail: 'dinner_set.png',
		params: [dinnerParams(DinnerAssets)],
	}
];

export const asset1 = [
{
	id:'watch',
	path: '/demo1/geo/watch.obj',
	thumbnail: 'watch.png',
	name: 'Apple Watch',
	mock: true,
	params: [layoutParams],
	proj: 'demo1'
},
{
	id: 'phone',
	path: '/demo1/geo/phone.obj',
	thumbnail: 'phone.png',
	mock: true,
	name: 'Samsung Galaxy',
	proj: 'demo1'
}, {
	id: 'camera',
	path: '/demo1/geo/camera.obj',
	thumbnail: 'camera.png',
	mock: true,
	name: 'Canon Camera',
	proj: 'demo1'
}, {
	id: 'tv',
	path: '/demo1/geo/tv.obj',
	thumbnail: 'tv.png',
	mock: true,
	name: 'Samsung QLED',
	proj: 'demo1'
}, {
	id: 'steam',
	path: '/demo1/geo/steam.obj',
	thumbnail: 'steam.png',
	mock: true,
	name: 'Steam Deck',
	proj: 'demo1'
}, {
	id: 'notebook',
	path: '/demo1/geo/notebook.obj',
	thumbnail: 'notebook.png',
	mock: true,
	name: 'Samsung Notebook',
	proj: 'demo1'
}, {
	id: 'coffeemachine',
	path: '/demo1/geo/coffeemaker.obj',
	thumbnail: 'coffeemaker.png',
	mock: true,
	name: 'Coffee Maker',
	proj: 'demo1'
}, {
	id: 'ps5',
	path: '/demo1/geo/ps5.obj',
	thumbnail: 'ps5.png',
	mock: true,
	name: 'Play Station 5 Dualsense',
	proj: 'demo1'
}, {
	id: 'headset',
	path: '/demo1/geo/headset.obj',
	thumbnail: 'headset.png',
	mock: true,
	name: 'Beats Headphone',
	proj: 'demo1'
}, {
	id: 'switch',
	path: '/demo1/geo/switch.obj',
	thumbnail: 'switch.png',
	name: 'Nitendo Switch',
	mock: true,
	proj: 'demo1'
}]