<!-- CustomHeading (blockStyle) -->
<script lang="ts">
	import type { BlockComponentProps } from '@portabletext/svelte';

	export let portableText: BlockComponentProps;

	$: ({ indexInParent, global, value } = portableText);
	$: ({ ptBlocks } = global);
	$: ({ style } = value);

	$: anchorId = `heading-${value._key}`;
</script>

<!-- If preceded by heading, have a higher margin top -->
<div id={anchorId} class="group relative">
	{#if style === 'h1'}
		<h1 class=" flex w-full items-center gap-3">
			<a
				href="#{anchorId}"
				class=" no-underline  opacity-0 group-hover:opacity-100 absolute -left-16 transition-opacity duration-500"
			>
				<span class="sr-only">Link to this heading</span>
				🔗
			</a>
			<slot />
		</h1>
	{:else if style === 'h2'}
		<h2 class=" flex w-full items-center gap-3">
			<a
				href="#{anchorId}"
				class=" no-underline  opacity-0 group-hover:opacity-100 absolute -left-14 transition-opacity duration-500"
			>
				<span class="sr-only">Link to this heading</span>
				🔗
			</a>
			<slot />
		</h2>
	{:else if style === 'h3'}
		<h3 class=" flex w-full items-center gap-3">
			<a
				href="#{anchorId}"
				class=" no-underline  opacity-0 group-hover:opacity-100 absolute -left-12 transition-opacity duration-500"
			>
				<span class="sr-only">Link to this heading</span>
				🔗
			</a>
			<slot />
		</h3>
	{:else if style === 'h4'}
		<h4 class=" flex w-full items-center gap-3">
			<a
				href="#{anchorId}"
				class=" no-underline  opacity-0 group-hover:opacity-100 absolute -left-8 transition-opacity duration-500"
			>
				<span class="sr-only">Link to this heading</span>
				🔗
			</a>
			<slot />
		</h4>
	{:else if style === 'h5'}
		<h5 class=" flex w-full items-center gap-3">
			<a
				href="#{anchorId}"
				class=" no-underline  opacity-0 group-hover:opacity-100 absolute -left-8 transition-opacity duration-500"
			>
				<span class="sr-only">Link to this heading</span>
				🔗
			</a>
			<slot />
		</h5>
	{:else }
		<h6 class=" flex w-full items-center gap-3">
			<a
				href="#{anchorId}"
				class=" no-underline  opacity-0 group-hover:opacity-100 absolute -left-8 transition-opacity duration-500"
			>
				<span class="sr-only">Link to this heading</span>
				🔗
			</a>
			<slot />
		</h6>
	{/if}
</div>
