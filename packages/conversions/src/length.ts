interface LengthUnits {
	[key: string]: number;
}

export const length_units: LengthUnits = {
	mm: 0.001,
	cm: 0.01,
	m: 1,
	km: 1000,
	in: 0.0254,
	ft: 0.3048,
	yd: 0.9144,
	mi: 1609.34,
};

export function convert_length(
	from_unit: string,
	to_unit: string,
	value: number
): number | null {
	if (
		!length_units.hasOwnProperty(from_unit) ||
		!length_units.hasOwnProperty(to_unit)
	) {
		return null; // Invalid unit
	}

	// Convert to meters first, then to the desired unit
	const value_in_meters = value * length_units[from_unit];
	const converted_value = value_in_meters / length_units[to_unit];

	return converted_value;
}
