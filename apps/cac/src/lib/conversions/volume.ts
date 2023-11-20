interface VolumeUnits {
	[key: string]: number
}

export const volume_units: VolumeUnits = {
	ml: 0.001,
	l: 1,
	cu_m: 1000,
	cu_in: 0.0163871,
	cu_ft: 28.3168,
	cu_yd: 764.555,
}

export function convert_volume(
	from_unit: string,
	to_unit: string,
	value: number
): number | null {
	if (
		!volume_units.hasOwnProperty(from_unit) ||
		!volume_units.hasOwnProperty(to_unit)
	) {
		return null // Invalid unit
	}

	// Convert to litres first, then to the desired unit
	const value_in_litres = value * volume_units[from_unit]
	const converted_value = value_in_litres / volume_units[to_unit]

	return converted_value
}
