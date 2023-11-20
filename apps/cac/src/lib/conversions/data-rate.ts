export type DataRateUnits = {
	[key: string]: number
}

export const data_rate_units: DataRateUnits = {
	bps: 1,
	kbps: 1000,
	mbps: 1000000,
	gbps: 1000000000,
	tbps: 1000000000000,
}

export function convert_data_rate(
	from_unit: string,
	to_unit: string,
	value: number
): number | null {
	if (
		!data_rate_units.hasOwnProperty(from_unit) ||
		!data_rate_units.hasOwnProperty(to_unit)
	) {
		return null // Invalid unit
	}

	const value_in_bps = value * data_rate_units[from_unit]
	const converted_value = value_in_bps / data_rate_units[to_unit]

	return converted_value
}
