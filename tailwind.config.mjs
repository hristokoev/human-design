/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"petrolleum": "#011F24",
				"gold": "#D4AF37",
			},
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
				Cuprum: ['Cuprum', 'sans-serif'],
			},
			maxWidth: {
				'8xl': '90rem',
				'9xl': '100rem',
			},
		},
	},
	plugins: [],
}
