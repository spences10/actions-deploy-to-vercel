import { describe, expect, test } from 'vitest'
import { convert_temperature } from './temperature'

describe('Temperature Conversion', () => {
	test('should convert Celsius to Fahrenheit', () => {
		expect(convert_temperature('c', 'f', 0)).toBe(32)
	})

	test('should convert Fahrenheit to Celsius', () => {
		expect(convert_temperature('f', 'c', 32)).toBe(0)
	})

	test('should convert Kelvin to Celsius', () => {
		expect(convert_temperature('k', 'c', 273.15)).toBe(0)
	})

	test('should return null for invalid units', () => {
		expect(convert_temperature('invalidUnit', 'c', 1)).toBeNull()
		expect(convert_temperature('c', 'invalidUnit', 1)).toBeNull()
	})
})
