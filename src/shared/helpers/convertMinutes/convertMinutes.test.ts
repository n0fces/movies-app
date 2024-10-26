import { convertMinutes } from './convertMinutes';

describe('convertMinutes', () => {
	test('should return null for not number value', () => {
		expect(convertMinutes(null)).toBeNull();
		expect(convertMinutes(undefined)).toBeNull();
	});

	test('should return null for negative value', () => {
		expect(convertMinutes(-61)).toBeNull();
		expect(convertMinutes(-60)).toBeNull();
		expect(convertMinutes(-59)).toBeNull();
	});

	test('should return tuple [0,0] for zero value', () => {
		expect(convertMinutes(0)).toEqual([0, 0]);
	});

	test('should return tuple [0, minutes] for 0 < value < 60', () => {
		expect(convertMinutes(59)).toEqual([0, 59]);
	});

	test('should return tuple [1, 0] for value = 60', () => {
		expect(convertMinutes(60)).toEqual([1, 0]);
	});

	test('should return tuple [hours, minutes] for value > 60', () => {
		expect(convertMinutes(61)).toEqual([1, 1]);
		expect(convertMinutes(119)).toEqual([1, 59]);
		expect(convertMinutes(120)).toEqual([2, 0]);
		expect(convertMinutes(121)).toEqual([2, 1]);
	});
});
