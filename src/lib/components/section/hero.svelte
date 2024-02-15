<script lang="ts">
	import { onMount } from 'svelte';
	import One from './../hero/one.svelte';
	onMount(async () => {
		
	});
</script>

<section class=" w-screen relative xl:grid md:place-items-center">
	<div class="h-[7.5rem] md:h-[11.9rem] absolute  w-full hero-bg my-auto block" />
	<div
		class=" hidden xl:h-screen xl:px-14 w-full xl:flex md:items-center md:justify-center z-auto hero"
		
	>
		<div class="xl:absolute one z-10 transition duration-300 w-full">
			<One />
		</div>
	</div>
	<div class=" w-full xl:hidden mb-10 md:items-center md:justify-center z-auto">
		<div class="xl:absolute one z-50 transition duration-300 w-full">
			<One />
		</div>
	</div>
</section>
