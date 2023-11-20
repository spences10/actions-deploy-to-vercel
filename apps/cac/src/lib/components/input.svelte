<script lang="ts">
	export let value = ''
	export let placeholder = ''
	export let id = ''
	export let label = ''
	export let disabled = false
	export let required = false
	export let errors: string[] = []
	export let font_size: string = 'text-base'
	export let input_classes: string = ''
</script>

<div class="form-control w-full max-w-2xl mb-2">
	<label for={id} class="label font-medium pb-1">
		<span class="label-text {font_size}">{label}</span>
	</label>
	<input
		class="input rounded-box w-full max-w-2xl shadow-lg {font_size} {input_classes}"
		type="number"
		{id}
		{placeholder}
		{required}
		{disabled}
		name={id}
		bind:value
	/>
	{#if errors}
		{#each errors as error}
			<label for={id} class="label pb-0">
				<span class="label-text-alt text-warning">{error}</span>
			</label>
		{/each}
	{/if}
</div>
