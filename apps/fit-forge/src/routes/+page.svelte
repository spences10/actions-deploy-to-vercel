<script lang="ts">
	import {
		calculate_bmi,
		get_bmi_category,
		get_ideal_weight,
	} from '$lib';

	let weight: number = 0;
	let height: number = 0;
	let bmi = '';
	let weight_unit = 'kg';
	let height_unit = 'cm';
	let category = '';
	let ideal_weight: {
		lower_weight: number;
		upper_weight: number;
	} | null = null;

	const handle_calculate = () => {
		const height_m =
			height_unit === 'cm'
				? height / 100
				: height_unit === 'ft'
				? height * 0.3048
				: height;
		bmi = calculate_bmi(weight, height, weight_unit, height_unit);
		category = get_bmi_category(parseFloat(bmi));
		ideal_weight = get_ideal_weight(height_m, weight_unit);
	};
</script>

<input type="number" bind:value={weight} placeholder="Weight" />
<select bind:value={weight_unit}>
	<option value="kg" selected>kg</option>
	<option value="lb">lb</option>
	<option value="st">st</option>
</select>
<input type="number" bind:value={height} placeholder="Height" />
<select bind:value={height_unit}>
	<option value="cm">cm</option>
	<option value="m" selected>m</option>
	<option value="in">in</option>
	<option value="ft">ft</option>
</select>
<button on:click={handle_calculate}>Calculate BMI</button>

{#if bmi}
	<p>Your BMI is {bmi} - {category}</p>
	<p>
		Ideal weight range: {ideal_weight?.lower_weight.toFixed(1)}
		{weight_unit} to {ideal_weight?.upper_weight.toFixed(1)}
		{weight_unit}
	</p>
{/if}
