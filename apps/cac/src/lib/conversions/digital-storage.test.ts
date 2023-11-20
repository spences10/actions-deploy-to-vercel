import { describe, expect, test } from 'vitest'
import { convert_digital_storage } from './digital-storage'

describe('Digital Storage Conversion', () => {
	test('should convert bytes to kilobytes', () => {
		expect(convert_digital_storage('b', 'kb', 1024)).toBeCloseTo(1)
	})

	test('should convert kilobytes to megabytes', () => {
		expect(convert_digital_storage('kb', 'mb', 1024)).toBeCloseTo(1)
	})

	test('should convert megabytes to gigabytes', () => {
		expect(convert_digital_storage('mb', 'gb', 1024)).toBeCloseTo(1)
	})

	test('should convert gigabytes to terabytes', () => {
		expect(convert_digital_storage('gb', 'tb', 1024)).toBeCloseTo(1)
	})

	test('should return null for invalid units', () => {
		expect(convert_digital_storage('b', 'invalid_unit', 1)).toBeNull()
	})
})
