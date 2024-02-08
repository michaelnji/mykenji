<script lang=ts>
	import { IconMini } from "svelte-heros-v2";
     
</script>



<div class="p-3 rounded-2xl border-2 border-orange-400 border-opacity-20 !bg-orange-600   !bg-opacity-10 relative">
   <div class=" rounded-xl absolute p-3 bg-orange-500 text-white -top-3 left-6">
      <IconMini name='exclamation-triangle-solid' width='26' height='26' />

   </div>
    <div class="  !font-normal text-lg font-mono tracking-tight leading-normal  pt-10 p-3">
      <slot/>
   </div>
  
</div>