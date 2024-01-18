<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import One from './../hero/one.svelte';

	onMount(async () => {
		anime({
			targets: '.hero',
			scale: 1,
			duration: 1500,
		});
		
	});
</script>

<section class="h-screen w-screen relative grid place-items-center">
	<div class="h-[10rem] absolute !scale-100 w-full hero-bg my-auto" />
	<div
	class=" px-3 pt-12 h-screen md:px-6 lg:px-14 w-full flex items-center justify-center z-auto hero"
	style="transform: scale(0)"
	>
		<div
			class="absolute one z-50 transition duration-300"
		>
			<One />
		</div>
		
		<!-- <div
			class="absolute two s transition duration-300 z-10"
			on:click={async () =>
				await exitElement('.two', '.three', '.one', 'slideOutUp', 'slideInDown')}
		>
			<Two />
		</div>
		
		<div
			class="absolute three z-0 s transition duration-300"
			on:click={async () =>
				await exitElement('.three', '.one', '.two', 'slideOutDown', 'slideInUp')}
		>
			<Three />
		</div> --> 
	</div>
</section>
