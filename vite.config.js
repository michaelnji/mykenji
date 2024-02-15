import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
// import viteCompression from 'vite-plugin-compression';
import { defineConfig } from 'vitest/config';
export default defineConfig({
	alias: {
		$lib: path.resolve(__dirname, './src/lib')
	},
	plugins: [sveltekit()],
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
