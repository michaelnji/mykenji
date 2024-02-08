<script>
	import { fade } from 'svelte/transition';
	// @ts-nocheck

	import { getOrSetItem } from '$lib/scripts/dbManager';
	import theme from '$lib/stores/theme';
	import '@fontsource/fira-mono';
	import '@fontsource/gloock';
	import '@fontsource/quattrocento';
	import '@fontsource/source-serif-pro';
	import '@fontsource/space-mono/400-italic.css';
	import '@fontsource/space-mono/400.css';
	import '@fontsource/space-mono/700-italic.css';
	import '@fontsource/space-mono/700.css';
	import '@fontsource/work-sans';
	import '@fontsource/work-sans/500.css';
	import '@fontsource/work-sans/600.css';
	import '@fontsource/work-sans/700.css';
	import '@fontsource/work-sans/800.css';
	import '@fontsource/work-sans/900.css';
	import '@fontsource/yeseva-one';
	import 'animate.css';

	import Loader from '$lib/components/misc/loader.svelte';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { onMount } from 'svelte';
	import Navbar from './../lib/components/navigation/navbar.svelte';
	import './styles.postcss';

	import { afterNavigate, beforeNavigate } from '$app/navigation';
	let isLoading = false;

	beforeNavigate(({ to }) => (isLoading = !!to?.route.id));
	afterNavigate(() => setTimeout(() => (isLoading = false), 800));

	inject();
	injectSpeedInsights();
	let ready = false;
	onMount(() => {
		ready = true;
		$theme = getOrSetItem('theme', 'light');
	});
</script>

{#if ready}

<div class={`${$theme} overflow-x-hidden`}>
	{#if isLoading}
		<div out:fade={{ duration: 250 }}><Loader /></div>
	{/if}
		<div
			class="dark:!bg-gray-950 dark:!text-gray-50 bg-white text-base-400 transition-colors duration-300 !overflow-hidden"
		>
			<header>
				<Navbar />
			</header>
			<main class=" min-h-screen">
				<slot />
			</main>

			<footer />
		</div>
	</div>
{:else}
	<div class="w-screen h-screen dark:bg-gray-950 overflow-hidden grid place-items-center" out:fade={{ duration: 250 }}>
		<Loader />
	</div>
{/if}
