import { headers } from 'next/headers';

type IResult = Record<string, string>;

export const deviceDetectServer = (): boolean => {
	const headersList = headers();

	const result: IResult = {};

	const createKey = (k: string) => {
		const kParts = k.split('-');

		let newK = kParts[0];

		for (let n = 1; n < kParts.length; n++) {
			kParts[n] = kParts[n].charAt(0).toUpperCase() + kParts[n].slice(1);
			newK += kParts[n];
		}

		return newK;
	};

	Array.from(headersList.keys()).map((key: string) => {
		const v = headersList.get(key);
		const nKey = createKey(key);
		Object.defineProperty(result, nKey, {
			value: v,
			writable: false,
			enumerable: true,
		});
	});

	return Boolean(result.secChUaMobile)
		? result.secChUaMobile !== '?0'
		: /Android|iPhone/i.test(result.userAgent);
};
