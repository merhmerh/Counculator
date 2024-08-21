<script>
import { page } from "$app/stores";
import PaperSize from "$comp/PaperSize.svelte";
import PrintSize from "$comp/PrintSize.svelte";

let paperSize = $state(null);
let printSize = $state({ width: null, height: null });
let qty = $state(null);
let answer = $state(null);

let { calculate } = $props();

function compute() {
	const paperX = Math.max(paperSize.width, paperSize.height);
	const paperY = Math.min(paperSize.width, paperSize.height);

	function countOrientation1() {
		const x = Math.floor(paperX / printSize.width);
		const y = Math.floor(paperY / printSize.height);
		return {
			count: x * y,
			x: x,
			y: y,
			orientation: 1,
			printSize: {
				width: printSize.width,
				height: printSize.height,
			},
		};
	}

	function countOrientation2() {
		const x = Math.floor(paperX / printSize.height);
		const y = Math.floor(paperY / printSize.width);
		return {
			count: x * y,
			x: x,
			y: y,
			orientation: 2,
			printSize: {
				width: printSize.height,
				height: printSize.width,
			},
		};
	}

	const c1 = countOrientation1();
	const c2 = countOrientation2();
	const result = c1.count > c2.count ? c1 : c2;

	const numberOfPaper = Math.ceil(qty / result.count);
	answer = {
		count: result.count,
		numberOfPaper,
		result,
		paperSize: { width: paperX, height: paperY },
		printSize,
		qty,
	};
}
</script>

<PaperSize bind:selectedSize={paperSize} />
<PrintSize bind:printSize bind:qty />
<button
	class="btn btn-accent"
	onclick={() => {
		compute();
		calculate(answer);
	}}>Calculate</button>

{#if answer}
	<div>
		<p>
			Each Paper can fit <span>{answer.count}</span> prints.
		</p>
		<p>
			<span>{answer.numberOfPaper}</span>piece(s) of paper is needed to
			print {answer.qty} prints
		</p>
	</div>
{/if}
