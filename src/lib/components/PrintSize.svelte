<script>
import { onMount } from "svelte";

let { printSize = $bindable(), qty = $bindable() } = $props();

let isMobile = $state(0);

onMount(() => {
	isMobile = window.innerWidth < 768;
});
</script>

<div class="print-size">
	<label class="input input-bordered flex items-center gap-2">
		<input
			class="grow"
			type={isMobile ? "number" : "text"}
			placeholder="Width"
			bind:value={printSize.width} />
		<span>mm</span>
	</label>

	<span class="cursive">x</span>

	<label class="input input-bordered flex items-center gap-2">
		<input
			class="grow"
			type={isMobile ? "number" : "text"}
			placeholder="Height"
			bind:value={printSize.height} />
		<span>mm</span>
	</label>

	<span class="cursive">@</span>

	<label class="input input-bordered flex items-center gap-2">
		<input
			class="grow"
			type={isMobile ? "number" : "text"}
			placeholder="Qty"
			bind:value={qty} />
		<span>qty</span>
	</label>
</div>

<style lang="scss">
.print-size {
	gap: 0.5rem;
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-betweens;
	label {
		input {
			position: relative;
			width: 100%;
		}
		span {
			font-size: 0.75rem;
			color: hsl(194, 8%, 69%);
		}
	}
}
</style>
