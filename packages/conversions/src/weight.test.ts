import { describe, expect, test } from 'vitest';
import { convert_weight } from './weight';

describe('Weight Conversion', () => {
	test('should convert kilograms to grams', () => {
		expect(convert_weight('kg', 'g', 1)).toBe(1000);
	});

	test('should convert pounds to kilograms', () => {
		expect(convert_weight('lb', 'kg', 1)).toBeCloseTo(0.453592);
	});

	test('should convert stones to pounds', () => {
		expect(convert_weight('st', 'lb', 1)).toBeCloseTo(14);
	});

	test('should return null for invalid units', () => {
		expect(convert_weight('invalidUnit', 'kg', 1)).toBeNull();
		expect(convert_weight('kg', 'invalidUnit', 1)).toBeNull();
	});
});
