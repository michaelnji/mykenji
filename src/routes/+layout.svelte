<script>
	import { getOrSetItem } from '$lib/scripts/dbManager';
	import theme from '$lib/stores/theme';
	import '@fontsource/epilogue';
	import '@fontsource/krona-one';
	import { onMount } from 'svelte';
	import Navbar from './../lib/components/navigation/navbar.svelte';
	import './styles.css';

	onMount(() => {
		$theme = getOrSetItem('theme', 'dark');
	}); 
</script>

<div class={$theme}>
	<div
		class="dark:!bg-base-400 dark:!text-gray-50 bg-white text-base-400 minw-screen min-h-screen transition-colors duration-300"
	>
		<header>
			<Navbar />
		</header>
		<main class="pt-12">
			<slot />
		</main>

		<footer />
	</div>
</div>
