import { describe, expect, test } from 'vitest'
import { convert_time } from './time'

describe('Time Conversion', () => {
	test('should convert seconds to minutes', () => {
		expect(convert_time('s', 'min', 60)).toBeCloseTo(1)
	})

	test('should convert minutes to hours', () => {
		expect(convert_time('min', 'h', 60)).toBeCloseTo(1)
	})

	test('should convert hours to days', () => {
		expect(convert_time('h', 'd', 24)).toBeCloseTo(1)
	})

	test('should convert days to weeks', () => {
		expect(convert_time('d', 'wk', 7)).toBeCloseTo(1)
	})

	test('should convert weeks to months', () => {
		expect(convert_time('wk', 'mo', 4.34524)).toBeCloseTo(1)
	})

	test('should convert months to years', () => {
		expect(convert_time('mo', 'yr', 12)).toBeCloseTo(1)
	})

	test('should return null for invalid units', () => {
		expect(convert_time('s', 'invalid_unit', 1)).toBeNull()
	})
})
