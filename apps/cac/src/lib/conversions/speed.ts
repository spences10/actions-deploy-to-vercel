interface SpeedUnits {
	[key: string]: number
}

export const speed_units: SpeedUnits = {
	m_s: 1,
	km_h: 1 / 3.6,
	mph: 1 / 2.23694,
	knot: 1 / 1.94384,
}

export function convert_speed(
	from_unit: string,
	to_unit: string,
	value: number
): number | null {
	if (
		!speed_units.hasOwnProperty(from_unit) ||
		!speed_units.hasOwnProperty(to_unit)
	) {
		return null // Invalid unit
	}

	// Convert to meters per second first, then to the desired unit
	const value_in_m_s = value * speed_units[from_unit]
	const converted_value = value_in_m_s / speed_units[to_unit]

	return converted_value
}
