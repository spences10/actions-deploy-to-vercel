import { describe, expect, test } from 'vitest';
import {
	calculate_bmi,
	get_bmi_category,
	get_ideal_weight,
} from './bmi';

describe('BMI Calculations', () => {
	test('should calculate BMI correctly', () => {
		expect(calculate_bmi(70, 1.75, 'kg', 'm')).toBe('22.9');
		expect(calculate_bmi(154, 70, 'lb', 'in')).toBe('22.1');
	});

	test('should return "Invalid unit" for invalid units', () => {
		expect(calculate_bmi(70, 1.75, 'invalidUnit', 'm')).toBe(
			'Invalid unit'
		);
		expect(calculate_bmi(70, 1.75, 'kg', 'invalidUnit')).toBe(
			'Invalid unit'
		);
	});
});

describe('BMI Categories', () => {
	test('should return correct BMI category', () => {
		expect(get_bmi_category(17)).toBe(
			'Underweight: BMI less than 18.5'
		);
		expect(get_bmi_category(22)).toBe('Normal weight: BMI 18.5-24.9');
		expect(get_bmi_category(28)).toBe('Overweight: BMI 25-29.9');
		expect(get_bmi_category(31)).toBe('Obesity: BMI 30 or higher');
	});
});

describe('Ideal Weight Ranges', () => {
	test('should return correct ideal weight range in kg', () => {
		const ideal_weight = get_ideal_weight(1.75, 'kg');
		expect(ideal_weight).not.toBeNull();
		if (ideal_weight) {
			expect(ideal_weight.lower_weight).toBeCloseTo(56.7, 1);
			expect(ideal_weight.upper_weight).toBeCloseTo(76.25625, 5);
		}
	});

	test('should return correct ideal weight range in lb', () => {
		const ideal_weight = get_ideal_weight(1.75, 'lb');
		expect(ideal_weight).not.toBeNull();
		if (ideal_weight) {
			expect(ideal_weight.lower_weight).toBeCloseTo(124.906, 3);
			expect(ideal_weight.upper_weight).toBeCloseTo(168.116, 3);
		}
	});

	test('should return null for invalid units', () => {
		expect(get_ideal_weight(1.75, 'invalidUnit')).toBeNull();
	});
});
