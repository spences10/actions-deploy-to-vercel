import * as c from '.'

export const conversions = [
	{
		name: 'Animal Age',
		function: c.convert_animal_age,
		units: c.animal_age_units,
	},
	{
		name: 'Cooking',
		function: c.convert_cooking,
		units: c.cooking_units,
	},
	{
		name: 'Data Rate',
		function: c.convert_data_rate,
		units: c.data_rate_units,
	},
	{
		name: 'Digital Storage',
		function: c.convert_digital_storage,
		units: c.digital_storage_units,
	},
	{
		name: 'Length',
		function: c.convert_length,
		units: c.length_units,
	},
	// {
	// 	name: 'Percentage',
	// 	function: c.convert_percentage,
	// 	units: c.percentage_units,
	// },
	{
		name: 'Speed',
		function: c.convert_speed,
		units: c.speed_units,
	},
	{
		name: 'Temperature',
		function: c.convert_temperature,
		units: c.temperature_units,
	},
	{
		name: 'Time',
		function: c.convert_time,
		units: c.time_units,
	},
	{
		name: 'Volume',
		function: c.convert_volume,
		units: c.volume_units,
	},
	{
		name: 'Weight',
		function: c.convert_weight,
		units: c.weight_units,
	},
]
