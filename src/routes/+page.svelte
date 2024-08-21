<script>
import Configuration from "$comp/Configuration.svelte";
import Visualize from "$comp/Visualize.svelte";

let vData = $state(null);
</script>

<div class="form-container flex flex-col gap-4">
	<Configuration
		calculate={(data) => {
			vData = data;
		}} />
</div>

<div class="vis">
	<Visualize bind:data={vData} />
</div>

<style lang="scss">
.form-container {
	width: 480px;
	margin-inline: auto;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
}
.vis {
	@media screen and (max-width: 768px) {
		display: none;
	}
}
</style>
