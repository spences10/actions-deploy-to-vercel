interface PercentageUnits {
	[key: string]: (base: number, percentage: number) => number
}

export const percentage_units: PercentageUnits = {
	percentage_of_number: (base, percentage) =>
		(percentage / 100) * base,
	number_from_percentage: (base, percentage) =>
		(base * 100) / percentage,
}

export function convert_percentage(
	unit: string,
	base: number,
	percentage: number
): number | null {
	if (!percentage_units.hasOwnProperty(unit)) {
		return null // Invalid unit
	}

	return percentage_units[unit](base, percentage)
}
