import { convert_length } from './length';
import { convert_weight } from './weight';

export const calculate_bmi = (
	weight: number,
	height: number,
	weight_unit: string,
	height_unit: string
) => {
	const weight_kg = convert_weight(weight_unit, 'kg', weight);
	const height_m = convert_length(height_unit, 'm', height);

	if (weight_kg === null || height_m === null) {
		return 'Invalid unit'; // Return a string indicating an invalid unit
	}

	const bmi = weight_kg / (height_m * height_m);
	return bmi.toFixed(1);
};

export const get_bmi_category = (bmi: number) => {
	if (bmi < 18.5) return 'Underweight: BMI less than 18.5';
	if (bmi >= 18.5 && bmi <= 24.9)
		return 'Normal weight: BMI 18.5-24.9';
	if (bmi >= 25 && bmi <= 29.9) return 'Overweight: BMI 25-29.9';
	return 'Obesity: BMI 30 or higher';
};

export const get_ideal_weight = (
	height_m: number,
	weight_unit: string
) => {
	const lower_weight_kg = 18.5 * height_m * height_m;
	const upper_weight_kg = 24.9 * height_m * height_m;
	const lower_weight = convert_weight(
		'kg',
		weight_unit,
		lower_weight_kg
	);
	const upper_weight = convert_weight(
		'kg',
		weight_unit,
		upper_weight_kg
	);

	if (lower_weight === null || upper_weight === null) {
		return null; // Invalid unit
	}

	return { lower_weight, upper_weight };
};
