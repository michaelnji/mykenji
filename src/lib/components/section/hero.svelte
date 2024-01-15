<script lang="ts">
	import i from '$lib/images/myke.jpeg';
	import { fade, fly } from 'svelte/transition';
</script>

<section class=" px-3 md:px-6 w-full" in:fly={{ x: -100, duration: 1000 }}>
	<div class="mx-auto max-w-7xl flex flex-col md:flex-row gap-x-12 gap-y-6 items-center justify-center">
		<div class="relative">
			
			<div class="absolute bottom-10 right-3 h-6 w-6 rotate-45 transform  bg-green-300 border-4 border-white dark:border-gray-950 rounded-full "></div>
			<div
			class=" bg-primary h-[rem] w-[12rem] border-4 border-white dark:border-gray-950 !rounded-full overflow-hidden mb-6 "
		>
			<img src={i} alt="" class="" loading="lazy" in:fade />
		</div>
		</div>
		<h1
			class="text-5xl md:text-5xl text-center md:text-left lg:text-7xl font-head font-extrabold capitalize"
		>
			I am <span class="!text-primary dark:!text-indigo-200">Michael Nji</span> a Web Developer & Creator
		</h1>
	</div>
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
