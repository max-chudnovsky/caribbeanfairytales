/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				cyan: {
					400: '#00BFFF',
				},
				orange: {
					400: '#FF9500',
					500: '#FF6B35',
				},
			},
		},
	},
	plugins: [],
}