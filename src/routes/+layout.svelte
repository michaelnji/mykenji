<script>
	import { getOrSetItem } from '$lib/scripts/dbManager';
	import theme from '$lib/stores/theme';
	import '@fontsource/krona-one';
	import '@fontsource/work-sans';
	import '@fontsource/work-sans/900.css';
	import '@fontsource/work-sans/600.css';
	import '@fontsource/work-sans/700.css';
	import '@fontsource/work-sans/800.css';
	import '@fontsource/work-sans/500.css';
	import '@fontsource/source-serif-pro';
	import '@fontsource/fira-mono';
	import { onMount } from 'svelte';
	import Navbar from './../lib/components/navigation/navbar.svelte';
	import './styles.css';
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"
injectSpeedInsights()
	onMount(() => {
		$theme = getOrSetItem('theme', 'dark');
	}); 
</script>

<div class={`${$theme}`}>
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
