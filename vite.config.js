import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		reporters: ['html', 'default'],
		coverage: {
			enabled: true,
			provider: 'istanbul',
			reportsDirectory: './tests-c/unit/coverage',
			reporter: ['clover', 'html', 'json']
		}
	}
});
