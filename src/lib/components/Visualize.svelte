<script>
let { data = $bindable() } = $props();
let paper = $state(null);
let centralize = $state(false);
let actualPrintSize = $state(null);
let canvasPrintSize = $state(null);

$effect(() => {
	if (!data) return;
	render();
});
$inspect(data);
function render() {
	const actualPaperSize = data.paperSize;

	let p_width = paper.getBoundingClientRect().width;
	actualPrintSize = data.printSize;

	const factor = p_width / actualPaperSize.width;

	canvasPrintSize = {
		width: data.result.printSize.width * factor,
		height: data.result.printSize.height * factor,
	};
}
</script>

<!-- svelte-ignore non_reactive_update -->
<div class="controls">
	<label class="label cursor-pointer">
		<span class="label-text">Align</span>
		<input
			type="checkbox"
			class="toggle toggle-accent"
			bind:checked={centralize} />
		<span class="label-text">Center</span>
	</label>
</div>
<div class="paper" bind:this={paper} class:center={centralize}>
	{#if actualPrintSize}
		<div class="dimension">
			<div class="x"><span>{data.paperSize.width}mm</span></div>
			<div class="y"><span>{data.paperSize.height}mm</span></div>
		</div>
		<div class="prints">
			{#if canvasPrintSize}
				{#each Array(data.result.y).entries() as [y]}
					<div class="row">
						{#each Array(data.result.x).entries() as [x]}
							<div
								class="card"
								style="--w:{canvasPrintSize.width}px; --h:{canvasPrintSize.height}px">
								<span>{(y + 1) * (x + 1)}</span>
							</div>
						{/each}
					</div>
				{/each}
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
.controls {
	margin-top: 2rem;
	label {
		width: fit-content;
		display: flex;
		gap: 0.5rem;
	}
}
.paper {
	width: 100%;
	aspect-ratio: 1.41;
	background-color: white;
	display: flex;
	position: relative;
	&.center {
		justify-content: center;
		align-items: center;
	}
	.dimension {
		z-index: 1000;
		.x {
			position: absolute;
			top: -12px;
			height: 24px;
			left: 50%;
			transform: translateX(-50%);
			span {
				margin-top: -50%;
			}
		}
		.y {
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			span {
				margin-left: -50%;
			}
		}
		span {
			padding-inline: 0.5rem;
			text-align: center;
			background-color: rgba(161, 155, 155, 0.446);
			border-radius: 4px;
			padding-block: 4px;
		}
	}

	.row {
		display: flex;
	}
	.card {
		flex-shrink: 0;
		width: var(--w);
		height: var(--h);
		border-radius: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid oklch(var(--a));
		background-image: repeating-linear-gradient(
			45deg,
			oklch(var(--b2)) 0,
			oklch(var(--b2)) 2px,
			transparent 0,
			transparent 50%
		);
		background-size: 16px 16px;
		background-color: oklch(var(--p1));
		span {
			font-size: 2rem;
		}
	}
}
</style>
