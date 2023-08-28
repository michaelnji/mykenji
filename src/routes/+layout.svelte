<script>
	import Navbar from './../lib/components/navigation/navbar.svelte';
	import './styles.css';
	import '@fontsource/epilogue';
	import '@fontsource/krona-one';
	import theme from '$lib/stores/theme';
	import { getOrSetItem } from '$lib/scripts/dbManager';
	import { onMount } from 'svelte';

	onMount(() => {
		$theme = getOrSetItem('theme', 'light');
	});
</script>

<div class={$theme}>
	<div
		class="dark:!bg-base-400 dark:!text-gray-50 bg-gray-50 text-base-400 minw-screen min-h-screen transition-colors duration-300"
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
