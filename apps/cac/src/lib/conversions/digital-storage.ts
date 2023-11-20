interface DigitalStorageUnits {
	[key: string]: number
}

export const digital_storage_units: DigitalStorageUnits = {
	b: 1,
	kb: 1024,
	mb: 1048576,
	gb: 1073741824,
	tb: 1099511627776,
}

export function convert_digital_storage(
	from_unit: string,
	to_unit: string,
	value: number
): number | null {
	if (
		!digital_storage_units.hasOwnProperty(from_unit) ||
		!digital_storage_units.hasOwnProperty(to_unit)
	) {
		return null // Invalid unit
	}

	// Convert to bytes first, then to the desired unit
	const value_in_bytes = value * digital_storage_units[from_unit]
	const converted_value =
		value_in_bytes / digital_storage_units[to_unit]

	return converted_value
}
