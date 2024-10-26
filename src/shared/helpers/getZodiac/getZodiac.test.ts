import { getZodiac } from './getZodiac';

describe('getZodiac', () => {
	test('should return null for invalid values', () => {
		expect(getZodiac(null)).toBeNull();
		expect(getZodiac(undefined)).toBeNull();
		expect(getZodiac('')).toBeNull();
	});

	test('should return null for invalid date string', () => {
		expect(getZodiac('2013-13-32')).toBeNull();
	});

	test('should return zodiac string for specific date string', () => {
		expect(getZodiac('1969-11-04T00:00:00.000Z')).toBe('Скорпион');
		expect(getZodiac('1980-04-10T00:00:00.000Z')).toBe('Овен');
		expect(getZodiac('1940-04-25T00:00:00.000Z')).toBe('Телец');
	});
});
