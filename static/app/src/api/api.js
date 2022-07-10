import axios from 'axios';
//axios.defaults.withCredentials = true;

const apiRoot = `http://localhost:1234/api/render`;

export const render = async (renderContext) => {
	const res = await axios.post(apiRoot, {
		...renderContext,
		preview: false
	});
	console.log(res);
}

export const preview = async (renderContext) => {
	const res = await axios.post(apiRoot, {
		...renderContext,
		preview: true
	});
	console.log(res);
}