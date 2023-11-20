interface TemperatureUnits {
	[key: string]: {
		multiplier: number
		offset: number
	}
}

export const temperature_units: TemperatureUnits = {
	c: { multiplier: 1, offset: 0 },
	f: { multiplier: 1.8, offset: 32 },
	k: { multiplier: 1, offset: 273.15 },
}

export function convert_temperature(
	from_unit: string,
	to_unit: string,
	value: number
): number | null {
	if (
		!temperature_units.hasOwnProperty(from_unit) ||
		!temperature_units.hasOwnProperty(to_unit)
	) {
		return null // Invalid unit
	}

	// Convert to Celsius first
	const celsius =
		(value - temperature_units[from_unit].offset) /
		temperature_units[from_unit].multiplier

	// Convert to the desired unit
	const converted_value =
		celsius * temperature_units[to_unit].multiplier +
		temperature_units[to_unit].offset

	return converted_value
}
