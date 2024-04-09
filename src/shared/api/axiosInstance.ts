import axios from 'axios';
const qs = require('qs');

// * потом надо подумать, как иначе организовать работу с запросами. Вообще рекомендуют папку api держать только в shared. Может потом надо будет всю логику с запросами организовать здесь. Пока будут  прописывать запросы там, где они нужны
export const api = axios.create({
	baseURL: process.env.API_URL,
	headers: {
		'Content-type': 'application/json',
		'X-API-KEY': process.env.API_KEY,
	},
	paramsSerializer: (params) => {
		return qs.stringify(params, { arrayFormat: 'repeat' });
	},
});
