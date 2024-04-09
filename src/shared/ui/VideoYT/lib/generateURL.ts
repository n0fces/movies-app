export function generateURL(id?: string) {
	let query = '?rel=0&showinfo=0&autoplay=1?enablejsapi=1';
	return 'https://www.youtube.com/embed/' + id + query;
}
