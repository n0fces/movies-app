export function generateURL(id?: string | null) {
	if (id) {
		const query = '?rel=0&showinfo=0&autoplay=1&enablejsapi=1';
		return 'https://www.youtube.com/embed/' + id + query;
	}
	return null;
}
