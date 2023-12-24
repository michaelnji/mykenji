<script lang=ts>
	import { IconMini } from "svelte-heros-v2";
     
</script>

<div class="p-3 bg-orange-400  bg-opacity-10 font-medium text-xl border-2 border-orange-400 dark:border-opacity-30 border-l-8">
   <div class="flex flex-col gap-y-3 ">
   <div class="flex gap-x-1 items-center font-sans  text-orange-500 dark:text-orange-300"> <IconMini name='exclamation-triangle-solid' width='24' height='24' />Be Careful</div> <div class="font-serif"><slot/></div>
   </div>
</div>