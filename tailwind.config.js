/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Source Serif Pro', 'sans-serif'],
				head: ['Work Sans', 'sans-serif'],
				'head-home': ['Gloock', 'sans-serif'],
				mono: ['Fira Mono']
			},
			colors: {
				'base-100': '#1f2937',
				'base-200': '#1d242e',
				'base-300': '#141820',
				'base-400': '#0a0d11',
				primary: '#4c6ef5',
				secondary: '#ff9f1c'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
