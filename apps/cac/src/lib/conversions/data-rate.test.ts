import { describe, expect, test } from 'vitest'
import { convert_data_rate } from './data-rate'

describe('Data Rate Conversion', () => {
	test('should convert bits per second to kilobits per second', () => {
		expect(convert_data_rate('bps', 'kbps', 1000)).toBe(1)
	})

	test('should convert kilobits per second to megabits per second', () => {
		expect(convert_data_rate('kbps', 'mbps', 1000)).toBe(1)
	})

	test('should convert megabits per second to gigabits per second', () => {
		expect(convert_data_rate('mbps', 'gbps', 1000)).toBe(1)
	})

	test('should convert gigabits per second to terabits per second', () => {
		expect(convert_data_rate('gbps', 'tbps', 1000)).toBe(1)
	})

	test('should return null for invalid units', () => {
		expect(convert_data_rate('invalid_unit', 'mbps', 1000)).toBeNull()
		expect(convert_data_rate('mbps', 'invalid_unit', 1000)).toBeNull()
	})
})
