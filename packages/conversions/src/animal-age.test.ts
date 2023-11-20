import { describe, expect, test } from 'vitest'
import { animal_age_units, convert_animal_age } from './animal-age'

describe('convert_animal_age', () => {
	test('returns the correct conversion from human to dog years', () => {
		const human_years = 10
		const expected_dog_years = human_years * animal_age_units['dog']
		expect(convert_animal_age('human', 'dog', human_years)).toEqual(
			expected_dog_years
		)
	})

	test('returns the correct conversion from cat to human years', () => {
		const cat_years = 9
		const expected_human_years = cat_years / animal_age_units['cat']
		expect(convert_animal_age('cat', 'human', cat_years)).toEqual(
			expected_human_years
		)
	})

	test('returns the correct conversion from rabbit to horse years', () => {
		const rabbit_years = 2
		const expected_horse_years =
			(rabbit_years / animal_age_units['rabbit']) *
			animal_age_units['horse']
		expect(
			convert_animal_age('rabbit', 'horse', rabbit_years)
		).toEqual(expected_horse_years)
	})

	test('returns null when given invalid units', () => {
		expect(convert_animal_age('invalid', 'dog', 10)).toBeNull()
		expect(convert_animal_age('dog', 'invalid', 10)).toBeNull()
	})

	test('returns the same value when converting from and to the same unit', () => {
		const human_years = 10
		expect(convert_animal_age('human', 'human', human_years)).toEqual(
			human_years
		)

		const cat_years = 7
		expect(convert_animal_age('cat', 'cat', cat_years)).toEqual(
			cat_years
		)
	})
})
