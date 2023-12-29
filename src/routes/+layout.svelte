<script>
	import { getOrSetItem } from '$lib/scripts/dbManager';
	import theme from '$lib/stores/theme';
	import '@fontsource/alegreya/400-italic.css';
import '@fontsource/alegreya/500-italic.css';
import '@fontsource/alegreya/600-italic.css';
import '@fontsource/alegreya/700-italic.css';
import '@fontsource/alegreya/800-italic.css';
import '@fontsource/alegreya/900-italic.css';
	import '@fontsource/alegreya/400.css';
import '@fontsource/alegreya/500.css';
import '@fontsource/alegreya/600.css';
import '@fontsource/alegreya/700.css';
import '@fontsource/alegreya/800.css';
import '@fontsource/alegreya/900.css';
	import '@fontsource/fira-mono';
	import { onMount } from 'svelte';
	import Navbar from './../lib/components/navigation/navbar.svelte';
	import './styles.css';
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"
   import { ProgressBar } from "@prgm/sveltekit-progress-bar";
   import { inject } from '@vercel/analytics';
 
inject();
injectSpeedInsights()
	onMount(() => {
		$theme = getOrSetItem('theme', 'dark');
	}); 
</script>

<div class={`${$theme}`}>
	<ProgressBar class="text-primary" />
	<div
		class="dark:!bg-base-400 dark:!text-gray-50 bg-white text-base-400  transition-colors duration-300"
	>
		<header>
			<Navbar />
		</header>
		<main class="pt-12 min-h-screen">
			<slot />
		</main>

		<footer />
	</div>
</div>
