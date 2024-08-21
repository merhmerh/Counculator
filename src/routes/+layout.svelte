<script>
import "../main.scss";
import "../app.css";
</script>

<header>
	<a href="/">
		<h1 class="text-primary">Counculator</h1>
	</a>
</header>
<main>
	<slot />
</main>

<style lang="scss">
header {
	position: relative;
	top: 0;
	left: 0;
	height: 60px;
	width: 100%;
	h1 {
		font-size: 2rem;
		padding: 0.5rem;
		font-weight: 600;
	}
}
main {
	min-height: calc(100dvh - 60px);
	width: 1200px;
	margin-inline: auto;
	padding: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
}
</style>
