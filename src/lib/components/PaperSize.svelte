<script>
import { onMount } from "svelte";

let { selectedSize = $bindable(null), index = null } = $props();
let customSize = $state(false);
let sizes = [
	{ name: "A0", width: 841, height: 1189 },
	{ name: "A1", width: 594, height: 841 },
	{ name: "A2", width: 420, height: 594 },
	{ name: "A3", width: 297, height: 420 },
	{ name: "A4", width: 210, height: 297 },
	{ name: "A5", width: 148, height: 210 },
	{ name: "Custom", width: null, height: null },
];

onMount(() => {
	selectedSize = sizes[index];
});
</script>

<div class="paper-size">
	<select
		class="select select-bordered"
		onchange={(e) => {
			selectedSize = sizes.find((size) => size.name === e.target.value);
			if (e.target.value === "Custom") {
				customSize = true;
			} else {
				customSize = false;
			}
		}}>
		<option disabled selected={!selectedSize}>Paper Size</option>
		{#each sizes as size}
			<option
				value={size.name}
				selected={selectedSize && selectedSize.name == size.name}>
				{size.name}
				{#if size.name !== "Custom"}
					({size.width} x {size.height})
				{/if}
			</option>
		{/each}
	</select>

	{#if customSize}
		<div class="custom">
			<label class="input input-bordered flex items-center gap-2">
				<input
					class="grow"
					type="text"
					placeholder="Width"
					bind:value={selectedSize.width} />
				<span>mm</span>
			</label>

			<span>x</span>

			<label class="input input-bordered flex items-center gap-2">
				<input
					class="grow"
					type="text"
					placeholder="Height"
					bind:value={selectedSize.height} />
				<span>mm</span>
			</label>
		</div>
	{/if}
</div>

<style lang="scss">
.paper-size {
	display: flex;
	gap: 1rem;
	width: 100%;
	justify-content: space-between;
	.select {
		width: 210px;
		@media screen and (max-width: 768px) {
			width: 100%;
		}
		option {
			font-family: var(--font-mono);
			font-size: 0.875rem;
		}
	}
	.custom {
		gap: 0.5rem;
		display: flex;
		align-items: center;
		label {
			input {
				position: relative;
				width: 50px;
			}
			span {
				font-size: 0.75rem;
				color: hsl(194, 8%, 69%);
			}
		}
	}
}
</style>
