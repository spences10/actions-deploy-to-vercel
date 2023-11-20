<script lang="ts">
	import { conversions } from '$lib'
	import Input from '$lib/components/input.svelte'
	import Select from '$lib/components/select.svelte'

	interface Conversion {
		name: string
		function: (arg0: string, arg1: string, arg2: number) => any
		units: Record<string, any> | null
	}

	let from_unit = ''
	let to_unit = ''
	let value = '0'
	let converted_value: number = 0

	let selected_conversion_name = ''
	let selected_conversion: Conversion | null = null

	$: {
		selected_conversion =
			conversions.find((c) => c.name === selected_conversion_name) ||
			null
	}

	$: {
		if (selected_conversion && from_unit && to_unit && value) {
			converted_value = selected_conversion.function(
				from_unit,
				to_unit,
				Number(value)
			)
		} else {
			converted_value = 0
		}
	}
</script>

<svelte:head>
	<title>
		Convert and Calculate: Calculate and Convert Units Across Multiple
		Domains
	</title>
	<meta
		name="description"
		content="Effortlessly convert and calculate units across a wide array of categories including animal ages, cooking measurements, digital storage, speed, temperature, and more. Experience the convenience of having all your conversion tools in one place."
	/>
	<meta
		name="keywords"
		content="convert and calculate, unit conversion, animal age conversion, cooking measurements, digital storage, speed conversion, temperature conversion, volume conversion, weight conversion, length conversion"
	/>
</svelte:head>

<h1>Convert and Calculate</h1>

<section>
	<h2 id="intro" class="hidden">Introduction</h2>
	<p>
		Welcome to Convert and Calculate - your one-stop solution for a
		wide array of unit conversions. Whether you're looking to convert
		animal ages, compare cooking measurements, calculate digital
		storage, or convert between different speed, temperature, volume,
		weight, or length units, we've got you covered. Convert and
		Calculate simplifies these tasks into a matter of a few clicks,
		providing you with accurate results in an instant.
	</p>
	<small>* Animal ages are a rough approximation.</small>
</section>

<h2 id="conversion-selection">Select Conversion Type</h2>
<section
	aria-labelledby="conversion-selection"
	class="mb-5 card shadow-lg bg-secondary"
>
	<div class="card-body">
		<Select
			id="conversion-select"
			label="Select a conversion"
			options={conversions.map((c) => ({ name: c.name }))}
			placeholder="Conversions"
			bind:selected_option={selected_conversion_name}
		/>

		{#if selected_conversion && selected_conversion.units}
			<Select
				id="from-unit-select"
				label="From"
				options={Object.keys(selected_conversion.units).map(
					(unit) => ({
						name: unit,
					})
				)}
				placeholder="From"
				bind:selected_option={from_unit}
			/>

			<Select
				id="to-unit-select"
				label="To"
				options={Object.keys(selected_conversion.units).map(
					(unit) => ({
						name: unit,
					})
				)}
				placeholder="To"
				bind:selected_option={to_unit}
			/>

			<Input id="value-input" label="Value" bind:value />
			<h3
				class="text-center font-bold leading-relaxed tracking-wide p-2 rounded-box shadow-lg bg-primary-content text-secondary-content"
			>
				Value: {Number(converted_value.toFixed(2)).toLocaleString()}
			</h3>
		{/if}
	</div>
</section>

<p>
	Delve into the world of conversion and calculations with our
	comprehensive tool that's designed to make your life easier. Whether
	you're a student, a professional, or just someone seeking to make
	sense of the world in different units, Universal Converter is here
	to assist.
</p>

<p>
	Navigating through various measurement systems has never been
	easier. From cooking to data rates, animal age to digital storage -
	we cover it all. Try out Universal Converter today, and experience
	the ease of converting and calculating at your fingertips.
</p>
