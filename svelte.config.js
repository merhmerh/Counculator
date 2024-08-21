import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$fn: "src/lib/functions",
			$comp: "src/lib/components",
			$data: "src/lib/data",
			$static: "src/static",
			$routes: "src/routes",
			$config: "src/config",
			$src: "src",
		},
	},
	preprocess: vitePreprocess(),
};

export default config;
