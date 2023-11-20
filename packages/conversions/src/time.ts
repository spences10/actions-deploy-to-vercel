interface TimeUnits {
	[key: string]: number
}

export const time_units: TimeUnits = {
	ms: 0.001,
	s: 1,
	min: 60,
	h: 3600,
	d: 86400,
	wk: 604800,
	mo: 2628000, // Approximation, 1 month = 30.44 days
	yr: 31536000, // Non-leap year
}

export function convert_time(
	from_unit: string,
	to_unit: string,
	value: number
): number | null {
	if (
		!time_units.hasOwnProperty(from_unit) ||
		!time_units.hasOwnProperty(to_unit)
	) {
		return null // Invalid unit
	}

	// Convert to seconds first, then to the desired unit
	const value_in_seconds = value * time_units[from_unit]
	const converted_value = value_in_seconds / time_units[to_unit]

	return converted_value
}
