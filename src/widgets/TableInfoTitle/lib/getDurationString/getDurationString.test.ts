import { getDurationString } from './getDurationString';

describe('getDurationString', () => {
	test('should return null for invalid value', () => {
		expect(getDurationString(null)).toBeNull();
		expect(getDurationString(undefined)).toBeNull();
		expect(getDurationString(-60)).toBeNull();
	});

	test('should return null for zero value', () => {
		expect(getDurationString(0)).toBeNull();
	});

	test('should return only minutes', () => {
		expect(getDurationString(59)).toBe('59 мин');
	});

	test('should return only hours', () => {
		expect(getDurationString(60)).toBe('1 ч');
		expect(getDurationString(120)).toBe('2 ч');
	});

	test('should return string with hours and minutes', () => {
		expect(getDurationString(61)).toBe('1 ч 1 мин');
		expect(getDurationString(119)).toBe('1 ч 59 мин');
		expect(getDurationString(121)).toBe('2 ч 1 мин');
	});
});
