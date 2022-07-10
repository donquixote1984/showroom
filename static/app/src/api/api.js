import axios from 'axios';
//axios.defaults.withCredentials = true;

const apiRoot = `http://localhost:1234/api`;

export const render = async (renderContext) => {
	const res = await axios.post(apiRoot+'/render', renderContext);
	return res.data
}


export const listfile = async (path) => {
	const res = await axios.get(apiRoot + '/path?p='+path);
	return res.data.paths
}