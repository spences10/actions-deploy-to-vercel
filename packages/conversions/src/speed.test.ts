import { describe, expect, test } from 'vitest'
import { convert_speed } from './speed'

describe('Speed Conversion', () => {
	test('should convert meters per second to kilometers per hour', () => {
		expect(convert_speed('m_s', 'km_h', 1)).toBeCloseTo(3.6)
	})

	test('should convert miles per hour to kilometers per hour', () => {
		expect(convert_speed('mph', 'km_h', 1)).toBeCloseTo(1.60934)
	})

	test('should convert knots to meters per second', () => {
		expect(convert_speed('knot', 'm_s', 1)).toBeCloseTo(0.514444)
	})

	test('should return null for invalid units', () => {
		expect(convert_speed('invalidUnit', 'm_s', 1)).toBeNull()
		expect(convert_speed('m_s', 'invalidUnit', 1)).toBeNull()
	})
})
