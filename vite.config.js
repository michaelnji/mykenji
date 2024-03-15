import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import webfontDownload from "vite-plugin-webfont-dl";

import { defineConfig } from 'vitest/config';
export default defineConfig({
	alias: {
		$lib: path.resolve(__dirname, './src/lib')
	},
	plugins: [sveltekit(),webfontDownload([
			"https://api.fontshare.com/v2/css?f[]=archivo@701,401,900,801,901,700,800,200,201,300,500,501,301,100,1,2,400,600,101,601&f[]=clash-display@200,400,700,500,600,1,300&display=swap",
			"https://api.fontshare.com/v2/css?f[]=manrope@700,400,300,1,800,600,500,200&display=swap", "https://api.fontshare.com/v2/css?f[]=manrope@700,400,300,1,800,600,500,200&display=swap"
		]),],
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		reporters: ['html', 'default'],
		coverage: {
			// enabled: true,
			provider: 'istanbul',
			// reportsDirectory: './coverage',
			reporter: ['html', 'json']
		}
	},
	build: {
		minify: true

		// rollupOptions: {
		// 	output: {
		// 		manualChunks: function manualChunks(id) {
		// 			if (id.includes('node_modules/animejs')) {
		// 				return 'vendor';
		// 			}
		// 			if (id.includes('node_modules/svelte-simples')) {
		// 				return 'icons-svelte-simples';
		// 			}

		// 			if (id.includes('src/lib/components/section/about.svelte')) {
		// 				return 'about';
		// 			}
		// 			if (id.includes('src/lib/components/section/projects.svelte')) {
		// 				return 'projects';
		// 			}
		// 			if (id.includes('src/lib/components/section/footer.svelte')) {
		// 				return 'footer';
		// 			}
		// 			if (id.includes('src/lib/components/section/hero.svelte')) {
		// 				return 'hero';
		// 			}
		// 			if (id.includes('src/lib/components/section/blog.svelte')) {
		// 				return 'blog';
		// 			}
		// 			if (id.includes('svelte-heros-v2')) {
		// 				return 'svelte-heros-v2';
		// 			}
		// 		}
		// 	}
		// }
	}
});
