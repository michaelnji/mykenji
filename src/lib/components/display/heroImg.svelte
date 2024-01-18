<script lang="ts">
	import anime from 'animejs';
	import { Icon } from 'svelte-simples';
	import i from '$lib/images/myke.jpeg';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	onMount(() => {
		let elements = document.querySelectorAll('.icon-one-a');
		anime({
			targets: '.hero-img',
			opacity: {
				value: 1,
				duration: 1500
			},
			translateY: '0px',
			delay: 1500
		});
		anime({
			targets: elements,
			opacity: {
				value: 1,
				delay: anime.stagger(300, {start:2000,easing: 'easeInOutQuad'})
			},
			translateY: {
				value: '0px',
				delay: anime.stagger(300, {start:2000,easing: 'easeInOutQuad'})
			},
			
			
		});
	});
</script>

<div class="flex w-full gap-x-12 items-center justify-between">
	<div class=" bg-primary overflow-hidden hero-img mb-6 rounded-3xl w-[12rem]" style="opacity:0; transform:translateY(20px);">
		<img src={i} alt="" class="" loading="lazy" />
	</div>
	<div class="flex gap-x-3 icon-a">
		<div class="flex flex-col  justify-between gap-3 -rotate-12 mb-3 container-a">
			<span
				class="p-4 icon-one-a rounded-md shadow-lg font-bold font-head-home text-3xl bg-white flex items-center gap-4 border border-black dark:border-gray-700 dark:bg-gray-800"
				style="opacity:0; transform:translateY(20px);"
				><Icon name="javascript" width="40" height="40" color="#f0db4f" />
			</span>
			<span
				class="p-4 rounded-md icon-one-a shadow-lg font-bold font-head-home text-3xl bg-white flex items-center gap-4 border border-black dark:border-gray-700 dark:bg-gray-800"
				style="opacity:0; transform:translateY(20px);"
				><Icon name="python" width="40" height="40" color="#3498db" />
			</span>
		</div>
		<div class="flex flex-col justify-between gap-3 -rotate-12 mb-3">
			<span
				class="p-4 rounded-md icon-one-a shadow-lg font-bold font-head-home text-3xl bg-white flex items-center gap-4 border border-black dark:border-gray-700 dark:bg-gray-800"
				style="opacity:0; transform:translateY(20px);"
				><Icon name="supabase" width="40" height="40" color="#51cf66" /> supabase
			</span>
			<span
				class="p-4 rounded-md icon-one-a shadow-lg font-bold font-head-home text-3xl bg-white flex items-center gap-4 border border-black dark:border-gray-700 dark:bg-gray-800"
				style="opacity:0; transform:translateY(20px);"
				><Icon name="svelte" width="40" height="40" color="#ff922b" /> Svelte
			</span>
		</div>
	</div>
</div>
