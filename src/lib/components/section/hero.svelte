<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import One from './../hero/one.svelte';
	onMount(async () => {

		anime({
			targets: '.hero',
			scale: 1,
			duration: 1500
		});
	});
</script>

<section class=" w-screen  relative xl:grid md:place-items-center">
	<div class=" h-[7rem] md:h-[10rem] absolute !scale-100 w-full hero-bg my-auto block" />
	<div
		class=" hidden  xl:h-screen xl:px-14 w-full xl:flex md:items-center md:justify-center z-auto hero"
		style="transform: scale(0)"
	>
		<div class="xl:absolute one z-50 transition duration-300 w-full">
			<One />
		</div>
	</div>
	<div
		class=" w-full xl:hidden mb-10 md:items-center md:justify-center z-auto "
	>
		<div class="xl:absolute one z-50 transition duration-300 w-full">
			<One />
		</div>
	</div>
</section>
