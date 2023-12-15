<!-- CustomHeading (blockStyle) -->
<script lang="ts">
  import type {BlockComponentProps} from '@portabletext/svelte'

  export let portableText: BlockComponentProps

  $: ({indexInParent, global, value} = portableText)
  $: ({ptBlocks} = global)
  $: ({style} = value)

  $: precededByHeading = ['h1', 'h2', 'h3', 'h4', 'h5'].includes(ptBlocks[indexInParent - 1]?.style)

  $: anchorId = `heading-${value._key}`
</script>

<!-- If preceded by heading, have a higher margin top -->
<div class="relative {precededByHeading ? 'mt-10' : 'mt-4'}" id={anchorId}>
  <a href="#{anchorId}">
    <span class="sr-only">Link to this heading</span>
    🔗
  </a>
  {#if style === 'h1'}
    <h1 class="text-4xl font-black"><slot /></h1>
  {:else if style === 'h2'}
    <h2 class="text-3xl"><slot /></h2>
  {:else if style === 'h3'}
    <h3 class="text-xl"><slot /></h3>
  {:else}
    <h4 class="text-lg text-gray-600"><slot /></h4>
  {/if}
</div>