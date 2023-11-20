export type AnimalAgeUnits = {
	[key: string]: number
}

export const animal_age_units: AnimalAgeUnits = {
	human: 1,
	dog: 7,
	cat: 5,
	rabbit: 5.3,
	horse: 3,
}

export function convert_animal_age(
	from_unit: string,
	to_unit: string,
	value: number
): number | null {
	if (
		!animal_age_units.hasOwnProperty(from_unit) ||
		!animal_age_units.hasOwnProperty(to_unit)
	) {
		return null // Invalid unit
	}

	const value_in_human = value / animal_age_units[from_unit]
	const converted_value = value_in_human * animal_age_units[to_unit]

	return converted_value
}
