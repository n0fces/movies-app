import { isValidDate } from './isValidDate';

describe('isValidDate', () => {
	test('should return false for invalid value', () => {
		expect(isValidDate(null)).toBeFalsy();
		expect(isValidDate(undefined)).toBeFalsy();
		expect(isValidDate('')).toBeFalsy();
	});

	test('should return false for invalid date string', () => {
		expect(isValidDate('2013-13-32')).toBeFalsy();
	});

	test('should return true for valid date string', () => {
		expect(isValidDate('1969-11-04T00:00:00.000Z')).toBeTruthy();
		expect(isValidDate('1980-04-10T00:00:00.000Z')).toBeTruthy();
		expect(isValidDate('1940-04-25T00:00:00.000Z')).toBeTruthy();
	});
});
