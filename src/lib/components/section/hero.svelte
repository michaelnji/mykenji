<script lang="ts">
	import i from '$lib/images/myke.jpeg';
	import { fade } from "svelte/transition";
</script>

<section class=" px-3 md:px-6 w-full">
	<div class="mx-auto max-w-7xl flex flex-col md:flex-row gap-6 items-center  justify-center"><div
		class="md:max-w-[12rem] max-w-[8rem] w-full  !rounded-full overflow-hidden mb-6 border-4 relative border-base-300 dark:border-gray-50"
	>
		<img src={i} alt="" class="" in:fade />
	</div>
	<h1
		class="text-6xl md:text-5xl text-center md:text-left  lg:text-7xl  font-head font-extrabold capitalize"
	>
		I love <span class="!text-primary dark:!text-indigo-200 ">the awesome web</span> & building Open source  
	</h1></div>
	
</section>
<!-- <section class="pt-20  w-full  relative">
	<div>
		
		
		<div class="md:h-48 h-36 w-full max-w-[21rem] md:max-w-[23rem] absolute right-1/2 translate-x-1/2 rotate-6 bg-gray-100 dark:bg-base-300 "></div>
		<div class="md:h-48 h-36 w-full max-w-[21rem] md:max-w-[23rem] absolute right-1/2 translate-x-1/2 -rotate-6 bg-gray-100 dark:bg-base-300 "></div>
	<div class=" p-3 max-w-max mx-auto transform  bg-gray-100 dark:bg-base-300">
			<h2 class="text-xl md:text-2xl opacity-80 w-full max-w-6xl !mx-auto font-medium text-center">
		I use the <span class="text-primary dark:text-indigo-200 text-medium">SENS</span> stack
	</h2>
	<div class="w-full max-w-xl flex-wrap justify-center p-6 !mx-auto flex items-center gap-3 md:hidden ">
		<div class="p-2 ">
			<Icon name="supabase" color="#51cf66" height="38" width="38" />
		</div>
		<div class="p-2 ">
			<Icon name="express" color="teal" height="38" width="38" />
		</div>
		<div class="p-2 ">
			<Icon name="nodedotjs" color="#37b24d" height="38" width="38" />
		</div>

		<div class="p-2 ">
			<Icon name="svelte" color="orange" height="38" width="38" />
		</div>
	</div>
	<div class="w-full max-w-xl flex-wrap justify-center p-6 !mx-auto md:flex items-center gap-3 hidden ">
		<div class="p-2 ">
			<Icon name="supabase" color="#51cf66" height="55" width="55" />
		</div>
		<div class="p-2 ">
			<Icon name="express" color="teal" height="55" width="55" />
		</div>
		<div class="p-2 ">
			<Icon name="nodedotjs" color="#37b24d" height="55" width="55" />
		</div>

		<div class="p-2 ">
			<Icon name="svelte" color="orange" height="55" width="55" />
		</div>
	</div>
	</div>
	</div>
</section> -->


