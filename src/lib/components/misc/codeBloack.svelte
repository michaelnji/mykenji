<script>
	// @ts-nocheck

	import Highlight, { HighlightAuto, HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import css from 'svelte-highlight/languages/css';
	export let portableText;
	$: ({ value } = portableText);
	$: ({ language, code } = value);
</script>

{#if language == 'css'}
	<Highlight language={css} {code} langtag />
    {:else if language == 'jsx'}
	<HighlightSvelte {code} langtag/>
    {:else}
	<HighlightAuto {code} langtag/>
{/if}
