export const parseMediaURL = (url?: string | null) => {
	return url?.replace(/.+\/embed\/(\w+)\/*/, '$1');
};
