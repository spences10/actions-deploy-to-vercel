<script lang="ts">
	export let id = ''
	export let label = ''
	export let font_size: string = 'text-base'
	export let select_classes: string = ''
	export let options: { name: string; selected?: boolean }[] = []
	export let disabled_option: string = ''
	export let placeholder: string = ''
	let value = disabled_option
	export { value as selected_option }
</script>

<div class="form-control w-full max-w-2xl mb-2">
	<label for={id} class="label font-medium pb-1">
		<span class="label-text {font_size}">{label}</span>
	</label>
	<select
		bind:value
		class="input rounded-box w-full max-w-2xl shadow-lg {font_size} {select_classes}"
		{id}
		name={id}
	>
		{#if placeholder}
			<option disabled selected value="">{placeholder}</option>
		{/if}
		{#each options as option (option.name)}
			<option value={option.name}>{option.name}</option>
		{/each}
	</select>
</div>
