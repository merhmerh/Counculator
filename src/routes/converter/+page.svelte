<script>
let width;
let height;
let area = 0;

function calc_mm_to_sqft() {
	const area_in_mm = width.value * height.value;
	const area_str = (area_in_mm * 0.0000107639).toFixed(2);
	area = Number(area_str);
}
</script>

<div class="inputs">
	<label class="input input-bordered flex items-center gap-2">
		<input
			class="grow"
			type="text"
			placeholder="Width"
			bind:this={width}
			on:change={calc_mm_to_sqft} />
		<span>mm</span>
	</label>
	<span>x</span>
	<label class="input input-bordered flex items-center gap-2">
		<input
			class="grow"
			type="text"
			placeholder="Height"
			on:change={calc_mm_to_sqft}
			bind:this={height} />
		<span>mm</span>
	</label>
	<span>=</span>
	<div class="input input-bordered flex items-center gap-2 ans">
		<span>{area}</span>
		<span>sqft</span>
	</div>
</div>

<style lang="scss">
.inputs {
	display: flex;
	gap: 1rem;
	align-items: center;
	.ans {
		min-width: 200px;
		display: flex;
		justify-content: space-between;
	}
}
</style>
