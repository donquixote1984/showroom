import {commonParams} from './params';
import $ from 'jquery';
import segments from './hbs/ctrls/segments.hbs';
export default class Ctrls {
	constructor() {
		this.container = $('#ctrls');
		this.genCtrls();
	}

	genCtrls() {
		const html = segments({segments: commonParams});
		console.log(html)
		this.container.append(html);
	}
}