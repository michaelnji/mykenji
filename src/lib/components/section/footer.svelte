<script lang="ts">
	import Layered from './../display/layered.svelte';
	import Contact from './contact.svelte';
	//
</script>

<Layered />
<div class="w-full bg-primary p-12 border-t-2 border-primary">
	<div class="mb-24">
		<Contact/>
	</div>
	<footer class="flex gap-3 md:gap-6 flex-wrap items-center justify-center xl:justify-start">
		<div class="flex md:gap-6 gap-3 items-center">
			<div class="bg-gray-50 dark:bg-gray-900 p-3 md:p-6 rounded-xl md:rounded-2xl">
				<div class="loader w-[20px] md:w-[45px]" />
			</div>
			<div>
				<h2 class="font-head-home font-bold text-purple-50 text-xl md:text-3xl">Michael Nji</h2>
				<p class="text-lg md:text-xl opacity-70 font-semibold text-purple-100">Web Developer</p>
			</div>
		</div>
	
	</footer>
</div>

<style>
	/* HTML: <div class="loader"></div> */
	.loader {
		
		aspect-ratio: 1;
		--c: no-repeat linear-gradient(#715df2 0 0);
		background: var(--c) 0 0, var(--c) 0 100%, var(--c) 50% 50%, var(--c) 100% 0, var(--c) 100% 100%;
		animation: l13 2s infinite alternate ease-in;
	}

	@keyframes l13 {
		0%,
		10% {
			background-size: 20% 100%;
		}
		50% {
			background-size: 20% 20%;
		}
		90%,
		100% {
			background-size: 100% 20%;
		}
	}
</style>
