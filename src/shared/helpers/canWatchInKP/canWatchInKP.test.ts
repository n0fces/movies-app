import { canWatchInKP } from './canWatchInKP';

describe('canWatchInKP', () => {
	test('should return false for incorrect or empty data', () => {
		expect(canWatchInKP(undefined)).toBe(false);
		expect(canWatchInKP(null)).toBe(false);
		expect(canWatchInKP({})).toBe(false);
		expect(canWatchInKP({ items: [] })).toBe(false);
	});

	test('should return false for list without "Kinopoisk HD"', () => {
		expect(
			canWatchInKP({
				items: [
					{ name: 'IMDb', url: '', logo: { url: '' } },
					{ name: 'Rotten Tomatoes', url: '', logo: { url: '' } },
					{ name: 'MetaCritic', url: '', logo: { url: '' } },
				],
			}),
		).toBe(false);
	});

	test('should return true for list with "Kinopoisk HD"', () => {
		expect(
			canWatchInKP({
				items: [
					{ name: 'IMDb', url: '', logo: { url: '' } },
					{ name: 'Kinopoisk HD', url: '', logo: { url: '' } },
					{ name: 'Rotten Tomatoes', url: '', logo: { url: '' } },
					{ name: 'MetaCritic', url: '', logo: { url: '' } },
				],
			}),
		).toBe(true);
	});
});
