import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"brand-primary": "#4CAF4F",
				"brand-secondary": "#F5F7FA",
				"neutral-silver": "#F5F7FA",
				"neutral-d-gray": "#4D4D4D",
				"neutral-gray": "#717171",
				"neutral-black": "#263238",
			},
		},
	},
	plugins: [],
};
export default config;
