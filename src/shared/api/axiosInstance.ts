import axios, { AxiosError } from 'axios';
import qs from 'qs';

import { TimeoutRequestError } from '../errors/timeout-error';

// инстанс для работы с запросами
// в будущем, я так понимаю, я буду делать отдельный инстанс для работы с авторизацией
export const api = axios.create({
	baseURL: process.env.API_URL,
	headers: {
		'Content-type': 'application/json',
		'X-API-KEY': process.env.API_KEY,
	},
	timeout: 60000,
	paramsSerializer: (params): string => {
		return qs.stringify(params, { arrayFormat: 'repeat' });
	},
});

// перехватчик для различных ошибок при возвращении ответа
// response - входящий ответа
// request - исходящий от нас запрос
api.interceptors.response.use(
	// получаем доступ к возвращаемому ответу и просто возвращаем его
	(response) => response,
	(error) => {
		if (error instanceof AxiosError) {
			// Превышен таймаут запроса
			if (error.code === 'ECONNABORTED') {
				throw new TimeoutRequestError();
			}
			// Прочие ошибки
			return Promise.reject(error);
		}
	},
);
