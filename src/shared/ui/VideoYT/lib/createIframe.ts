import { generateURL } from './generateURL';

export function createIframe(id?: string) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('src', generateURL(id));

	return iframe;
}
