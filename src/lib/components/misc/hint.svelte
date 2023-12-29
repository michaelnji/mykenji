<script lang=ts>
	import { IconMini } from "svelte-heros-v2";
     
</script>

<div class="p-3 bg-green-400  bg-opacity-10 font-medium text-xl border-2 border-green-400 dark:border-opacity-30 border-l-8">
   <div class="flex flex-col gap-y-3 ">
   <div class="flex gap-x-1 items-center font-bold  text-green-400 dark:text-green-300"> <IconMini name='light-bulb-solid' width='24' height='24' />Hint <span class="w-12 h-0.5 bg-green-300"></span></div> <div class=" text-2xl opacity-80"><slot/></div>
   </div>
</div>