interface CookingUnits {
	[key: string]: number
}

export const cooking_units: CookingUnits = {
	tsp: 0.00492892,
	tbsp: 0.0147868,
	cup: 0.236588,
	fl_oz: 0.0295735,
	ml: 0.001,
	lb: 0.453592, // Pounds to Kilograms
	oz: 0.0283495, // Ounces to Grams
	kg: 1,
	g: 0.001,
}

export function convert_cooking(
	from_unit: string,
	to_unit: string,
	value: number
): number | null {
	if (
		!cooking_units.hasOwnProperty(from_unit) ||
		!cooking_units.hasOwnProperty(to_unit)
	) {
		return null // Invalid unit
	}

	// Convert to litres/kilograms first, then to the desired unit
	const value_in_base_unit = value * cooking_units[from_unit]
	const converted_value = value_in_base_unit / cooking_units[to_unit]

	return converted_value
}
