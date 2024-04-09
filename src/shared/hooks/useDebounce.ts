export const useDebouce = (fn: Function, delay = 300) => {
	let timeout: NodeJS.Timeout;

	return (...args: any[]) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => fn(...args), delay);
	};
};
