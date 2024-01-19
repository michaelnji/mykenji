<script>
	import 'animate.css';
	import { getOrSetItem } from '$lib/scripts/dbManager';
	import theme from '$lib/stores/theme';
	import '@fontsource/alegreya/400-italic.css';
	import '@fontsource/alegreya/400.css';
	import '@fontsource/alegreya/500-italic.css';
	import '@fontsource/alegreya/500.css';
	import '@fontsource/alegreya/600-italic.css';
	import '@fontsource/alegreya/600.css';
	import '@fontsource/alegreya/700-italic.css';
	import '@fontsource/alegreya/700.css';
	import '@fontsource/alegreya/800-italic.css';
	import '@fontsource/alegreya/800.css';
	import '@fontsource/alegreya/900-italic.css';
	import '@fontsource/alegreya/900.css';
	import '@fontsource/alegreya';

	import '@fontsource/work-sans';
	import '@fontsource/work-sans/900.css';
	import '@fontsource/work-sans/800.css';
	import '@fontsource/work-sans/700.css';
	import '@fontsource/work-sans/600.css';
	import '@fontsource/work-sans/500.css';
	import '@fontsource/work-sans/400.css';
	import '@fontsource/fira-mono';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { onMount } from 'svelte';
	import Navbar from './../lib/components/navigation/navbar.svelte';
	import './styles.postcss';
	import Loader from '$lib/components/misc/loader.svelte';
	import { navigationIsDelayed } from '$lib/stores/index';
	import { inject } from '@vercel/analytics';
	inject();
	injectSpeedInsights();
	onMount(() => {
		$theme = getOrSetItem('theme', 'dark');
	});
</script>

<div class={`${$theme}`}>
{#if $navigationIsDelayed}
	<div class="w-screen h-screen dark:bg-gray-950 overflow-hidden grid place-items-center">
		<Loader />
	</div>
{:else}
		<div
			class="dark:!bg-base-400 dark:!text-gray-50 bg-white text-base-400 transition-colors duration-300"
		>
			<header>
				<Navbar />
			</header>
			<main class=" min-h-screen overflow-x-hidden">
				<slot />
			</main>

			<footer />
		</div>
		{/if}
	</div>
