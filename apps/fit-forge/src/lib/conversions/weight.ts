interface WeightUnits {
	[key: string]: number;
}

export const weight_units: WeightUnits = {
	mg: 0.000001,
	g: 0.001,
	kg: 1,
	ton: 1000,
	oz: 0.0283495,
	lb: 0.453592,
	st: 6.35029,
};

export const convert_weight = (
	from_unit: string,
	to_unit: string,
	value: number
): number | null => {
	if (
		!weight_units.hasOwnProperty(from_unit) ||
		!weight_units.hasOwnProperty(to_unit)
	) {
		return null; // Invalid unit
	}

	// Convert to kilograms first, then to the desired unit
	const value_in_kilograms = value * weight_units[from_unit];
	const converted_value = value_in_kilograms / weight_units[to_unit];

	return converted_value;
};
