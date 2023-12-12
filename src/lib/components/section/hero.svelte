<script lang="ts">
	import { fade } from "svelte/transition";
	import i from '$lib/images/myke.jpeg';
	import { Icon } from 'svelte-simples';
</script>

<section class="pb-6 px-6">
	<div
		class="max-w-[16rem] w-full h-full mx-auto max-h-[16rem] !rounded-full overflow-hidden mb-6 border-4 relative border-base-300 dark:border-gray-50"
	>
		<img src={i} alt="" class="mx-auto" in:fade loading="lazy"/>
	</div>
	<h1
		class="text-4xl w-full max-w-6xl mx-auto md:text-6xl lg:text-7xl font-extrabold font-head text-center"
	>
		👋🏽Hi! I am Michael Nji, a <span class="!text-primary dark:!text-indigo-200">Developer </span> & Student
	</h1>
	<p class="md:mt-6 p-3 max-w-max rounded-lg md:bg-primary md:bg-opacity-10 md:text-primary md:dark:text-indigo-200  mx-auto text-center md:text-xl text-base  opacity-70">
		⚡A self taught web dev who's in love with building beautiful UIs, making
		<a href="/#projects" class="text-primary underline font-bold">cool stuff</a> since 2020
	</p>
</section>
<section class="pt-12  w-full">
	<h2 class="text-2xl w-full max-w-6xl !mx-auto font-extrabold font-head text-center">
		I use the <b class="text-primary dark:text-indigo-200">SENS</b> stack
	</h2>
	<div class="w-full max-w-xl flex-wrap justify-center p-6 !mx-auto flex items-center gap-3">
		<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-xl">
			<Icon name="supabase" color="#51cf66" height="68" width="68" />
		</div>
		<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-xl">
			<Icon name="express" color="teal" height="68" width="68" />
		</div>
		<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-xl">
			<Icon name="nodedotjs" color="#37b24d" height="68" width="68" />
		</div>

		<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-xl">
			<Icon name="svelte" color="orange" height="68" width="68" />
		</div>
	</div>
</section>

<style>
</style>
