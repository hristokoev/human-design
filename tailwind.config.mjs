/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"petroleum": {
					"50": "#f5f9f9",
					"100": "#d9edec",
					"200": "#b3dbd8",
					"300": "#85c1c0",
					"400": "#669999",
					"500": "#2d9f9f",
					"600": "#247e7f",
					"700": "#1e6166",
					"800": "#1b5055",
					"900": "#194548",
					"950": "#0b2328",
				},
				"gold": {
					"50": "#faf9ec",
					"100": "#f4f0cd",
					"200": "#ebdf9d",
					"300": "#dfc865",
					"400": "#d4af37",
					"500": "#c59b2d",
					"600": "#bb9417",
					"700": "#936a15",
					"800": "#7a5419",
					"900": "#68461b",
					"950": "#382010",
				},
			},
			fontFamily: {
				Roboto: ["Roboto", "sans-serif"],
				Cuprum: ["Cuprum", "sans-serif"],
			},
			maxWidth: {
				"8xl": "90rem",
				"9xl": "100rem",
			},
			animation: {
				"gradient": "gradient 0.3s ease-in-out",
				"reveal": "reveal 0.3s ease-in-out",
			},
			keyframes: {
				"gradient": {
					to: { "background-position": "200% center" },
				},
				"reveal": {
					from: { "transform": "translateY(-100%)" },
					to: { "transform": "translateY(0%)" },
				},
			}
		},
	},
	plugins: [],
}
