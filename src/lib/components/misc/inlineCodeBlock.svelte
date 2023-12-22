<script lang=ts>
   export let portableText: any;
	$: ({ plainTextContent } = portableText);
      
</script>

<span class="p-0.5 rounded bg-gray-200 dark:bg-gray-700 font-mono font-bold text-base">
    <slot/>
</span>