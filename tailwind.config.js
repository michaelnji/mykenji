/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Source Serif Pro', 'sans-serif'],
				head: ['Gloock', 'sans-serif'],
				mono: ['Space Mono']
			},
			colors: {
				'base-100': '#1f2937',
				'base-200': '#1d242e',
				'base-300': '#141820',
				'base-400': '#0a0d11',
				primary: '#715DF2',
				secondary: '#FCAF3C'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
