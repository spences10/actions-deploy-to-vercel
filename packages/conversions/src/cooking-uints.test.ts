import { describe, expect, test } from 'vitest'
import { convert_cooking } from './cooking-units'

describe('Cooking Measurements Conversion', () => {
	test('should convert teaspoons to millilitres', () => {
		expect(convert_cooking('tsp', 'ml', 1)).toBeCloseTo(4.92892)
	})

	test('should convert tablespoons to millilitres', () => {
		expect(convert_cooking('tbsp', 'ml', 1)).toBeCloseTo(14.7868)
	})

	test('should convert cups to fluid ounces', () => {
		expect(convert_cooking('cup', 'fl_oz', 1)).toBeCloseTo(8)
	})

	test('should convert fluid ounces to millilitres', () => {
		expect(convert_cooking('fl_oz', 'ml', 1)).toBeCloseTo(29.5735)
	})

	test('should convert pounds to kilograms', () => {
		expect(convert_cooking('lb', 'kg', 1)).toBeCloseTo(0.453592)
	})

	test('should convert ounces to grams', () => {
		expect(convert_cooking('oz', 'g', 1)).toBeCloseTo(28.3495)
	})

	test('should return null for invalid units', () => {
		expect(convert_cooking('invalid_unit', 'g', 1)).toBeNull()
	})
})
