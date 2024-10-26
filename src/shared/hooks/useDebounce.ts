export const useDebouce = <T extends unknown[]>(
	callback: (...args: T) => void,
	delay = 300,
) => {
	let timeout: NodeJS.Timeout;

	return (...args: T) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			callback(...args);
		}, delay);
	};
};
