<script lang="ts">
	import { IconMini } from 'svelte-heros-v2';
</script>

<div
	class="p-3 rounded-2xl border-2 border-opacity-20 border-green-500 bg-green-400 dark:bg-green-200 !bg-opacity-10 relative"
>
	<div class=" absolute rounded-xl p-3 bg-green-400 text-white -top-3 left-6">
		<IconMini name="star-solid" width="24" height="24" />
	</div>
	<div class=" text-lg tracking-tight leading-normal !font-normal pt-10 p-3 font-mono">
		<slot />
	</div>
</div>
