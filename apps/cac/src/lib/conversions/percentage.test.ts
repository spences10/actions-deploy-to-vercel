import { describe, expect, test } from 'vitest'
import { convert_percentage } from './percentage'

describe('Percentage of a number calculation', () => {
	test('should return the correct percentage of a number', () => {
		expect(convert_percentage('percentage_of_number', 100, 10)).toBe(
			10
		)
		expect(convert_percentage('percentage_of_number', 100, 50)).toBe(
			50
		)
		expect(convert_percentage('percentage_of_number', 100, 200)).toBe(
			200
		)
	})

	test('should calculate the base number from a percentage', () => {
		expect(convert_percentage('number_from_percentage', 20, 50)).toBe(
			40
		)
		expect(
			convert_percentage('number_from_percentage', 50, 100)
		).toBe(50)
		expect(
			convert_percentage('number_from_percentage', 100, 200)
		).toBe(50)
	})

	test('should return null for invalid unit', () => {
		expect(convert_percentage('invalid_unit', 100, 10)).toBe(null)
	})
})
