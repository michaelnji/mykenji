<script>
	// @ts-nocheck

	import { IconMini, IconSolid } from 'svelte-heros-v2';
	import Highlight, { HighlightAuto, HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import css from 'svelte-highlight/languages/css';
	import { copyToClipboard } from '$lib/utils/index';
	export let portableText;
	$: ({ value } = portableText);
	$: ({ language, code } = value);
	let copySuccess = false;

	function copyCode() {
		copyToClipboard(code.toString()).then((result) => {
			if (result === 'success') {
				copySuccess = true;
				setTimeout(() => {
					copySuccess = false;
				}, 1500);
			}
		});
	}
</script>

<div class="card-wrapper transition duration-300 ease-in-out !font-mono relative">
	{#if language == 'css'}
		<Highlight language={css} {code} />
	{:else if language == 'jsx'}
		<HighlightSvelte {code} />
	{:else}
		<HighlightAuto {code} />
	{/if}
	<button
		on:click={copyCode}
		class="py-1 px-2 absolute top-3 right-3 text-xs text-gray-200 bg-gray-700 rounded active:scale-95 transition-transform duration-200"
	>
		{#key copySuccess}
			{#if copySuccess}
				<IconMini name="check-mini" class="focus:!outline-none" />
			{:else}
				<IconMini name="square-2-stack-mini" class="focus:!outline-none" />
			{/if}
		{/key}
	</button>
</div>

<style>
	.card-wrapper {
		box-shadow: 4px 4px black;
	}
	.card-wrapper:hover {
		box-shadow: -4px -4px black;
	}
</style>
