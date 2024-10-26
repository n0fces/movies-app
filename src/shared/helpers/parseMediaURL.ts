export const parseMediaURL = (url?: string | null) => {
	const res = url?.replace(/.+\/embed\/(\w+)\/*/, '$1');
	return !!res ? res : null;
};
