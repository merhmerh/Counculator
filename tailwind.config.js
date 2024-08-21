import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Playpen Sans"', "sans-serif"],
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["lemonade"],
	},
};
