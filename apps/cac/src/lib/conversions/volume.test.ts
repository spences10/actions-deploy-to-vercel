import { describe, expect, test } from 'vitest'
import { convert_volume } from './volume'

describe('Volume Conversion', () => {
	test('should convert litres to millilitres', () => {
		expect(convert_volume('l', 'ml', 1)).toBe(1000)
	})

	test('should convert cubic feet to litres', () => {
		expect(convert_volume('cu_ft', 'l', 1)).toBeCloseTo(28.3168)
	})

	test('should convert cubic yards to cubic feet', () => {
		expect(convert_volume('cu_yd', 'cu_ft', 1)).toBeCloseTo(27)
	})

	test('should return null for invalid units', () => {
		expect(convert_volume('invalidUnit', 'l', 1)).toBeNull()
		expect(convert_volume('l', 'invalidUnit', 1)).toBeNull()
	})
})
