import { describe, expect, test } from 'vitest';
import { convert_length } from './length';

describe('Length Conversion', () => {
	test('should convert meters to kilometers', () => {
		expect(convert_length('m', 'km', 1000)).toBe(1);
	});

	test('should convert miles to kilometers', () => {
		expect(convert_length('mi', 'km', 1)).toBeCloseTo(1.60934);
	});

	test('should convert feet to meters', () => {
		expect(convert_length('ft', 'm', 1)).toBeCloseTo(0.3048);
	});

	test('should return null for invalid units', () => {
		expect(convert_length('invalidUnit', 'm', 1)).toBeNull();
		expect(convert_length('m', 'invalidUnit', 1)).toBeNull();
	});
});
