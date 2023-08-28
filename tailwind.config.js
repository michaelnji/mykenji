/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Epilogue'],
				head: ['Krona One']
			},
			colors: {
				'base-100': '#1f2937',
				'base-200': '#111827',
				'base-300': '#0a0d11',
				'base-400': '#000814',
				primary: '#f71735',
				secondary: '#ff9f1c'
			}
		}
	},
	plugins: []
};
