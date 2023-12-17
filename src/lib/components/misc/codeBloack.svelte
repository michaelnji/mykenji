<script>
	// @ts-nocheck

	import Highlight, { HighlightAuto, HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import css from 'svelte-highlight/languages/css';
	export let portableText;
	$: ({ value } = portableText);
	$: ({ language, code } = value);
</script>

<div class="card-wrapper  transition duration-300 ease-in-out">
	{#if language == 'css'}
	<Highlight language={css} {code} langtag />
    {:else if language == 'jsx'}
	<HighlightSvelte {code} langtag/>
    {:else}
	<HighlightAuto {code} langtag/>
{/if}
</div>
<style>
	.card-wrapper{
		box-shadow: 4px 4px black;
		
	}
	.card-wrapper:hover{
		box-shadow: -4px -4px black;
	}
</style>