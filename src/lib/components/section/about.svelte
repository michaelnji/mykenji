<script lang="ts">
	import { skills } from '$lib/utils/skills';
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { Icon } from 'svelte-simples';

	let element: any;
	let skill:any;
	function animateEntry() {
		const items = document.querySelectorAll('.about-items');
		anime({
			targets: items,
			translateY: 0,
			opacity: 1,
			duration: 600,
			delay: anime.stagger(300, { start: 800, easing: 'linear' })
		});
		anime({
			targets: '.about-img',
			opacity: 1,
			duration: 2000,
			delay: 1100
		});
	}
	onMount(() => {
		
	});
</script>

<div class="!mb-24 !px-6 w-screen flex items-start justify-center" id="about">
	<div class="w-full">
		<IntersectionObserver
			{element}
			on:intersect={() => {
				animateEntry();
			}}
		>
			<div
				bind:this={element}
				class=" flex flex-wrap md:flex-nowrap gap-4 md:gap-12 mx-auto w-full items-center justify-center md:items-start"
			>
				<div
					class="bg-green-100 rounded-xl mt-12 relative p-6 border-2 md:border-4 border-black max-w-2xl w-full about-items opacity-0"
					style="transform: translateY(50px);"
				>
					<div class="absolute rounded-lg border-2 md:border-4 border-black p-3 bg-green-100 -top-8">
						<h2 class="font-head-home text-xl md:text-2xl xl:text-3xl">Hello There!</h2>
					</div>
					<p class="text-xl md:text-2xl pt-4 md:pt-8 max-w-3xl font-medium opacity-80">
						I'm Michael, a self taught frontend web developer based in Cameroon with a knack for
						creating stuff with web technologies. I'm also into backend web development & a bit of
						graphic designing
					</p>
				</div>
				<div
					class="bg-blue-100 mt-12 rounded-xl relative p-6 border-2 md:border-4 border-black max-w-2xl w-full about-items opacity-0"
					style="transform: translateY(50px);"
				>
					<div class="absolute rounded-lg border-2 md:border-4 border-black p-3 bg-blue-100 -top-8">
						<h2 class="font-head-home text-xl md:text-2xl xl:text-3xl">I love the web</h2>
					</div>
					<p class="text-xl md:text-2xl pt-4 md:pt-8 max-w-3xl font-medium opacity-80">
						I discovered web development in 2020 and I've been learning and working hard to build
						awesome web projects. I've fallen in love with frontend web development and look to get
						better at it everyday.
					</p>
				</div>
			</div>
		</IntersectionObserver>

		<!-- skills -->
		<IntersectionObserver
			element={skill}
			on:intersect={() => {
				anime({
			targets: '.skills .skill',
			scale: 1,
			duration: 600,
			delay: anime.stagger(150, { start: 1000, easing: 'cubicBezier(.3, .4, .5, .3)' })
		});
			}}
		>
		<div bind:this={skill}
			class="w-full flex mt-12 md:mt-32 rounded-xl relative items-center justify-center p-6 xl:h-[25rem] font-head-home font-extrabold text-center text-9xl text-opacity-50 text-gray-700"
		>
			TECH I USE!
			<div class=" w-xl skills mx-auto absolute top-0 md:-rotate-6 grid md:grid-cols-3 grid-cols-2 gap-6">
				{#each skills as skill}
					<div
						class={`border-2  p-6 flex items-center flex-col gap-3  !bg-white skill rounded-xl`}
						style={`border-color:${skill.color}; transform: scale(0)`}
					>
						<Icon
							name={skill.icon ? skill.icon : skill.name}
							color={skill.color}
							height="50"
							width="50"
							class='hidden md:block'
						/>
						<Icon
							name={skill.icon ? skill.icon : skill.name}
							color={skill.color}
							height="30"
							width="30"
							class='block md:hidden'
						/>
						<p class="!text-sm md:text-2xl font-medium text-black capitalize">{skill.name}</p>
					</div>
				{/each}
			</div>
		</div>
		</IntersectionObserver>
	</div>

	<!-- <div class=" sticky bg-gray-800 top-[39rem] rotate-90">
		
			<h2
				class="font-bold font-head-home text-6xl opacity-25 transition-opacity duration-500 w-full"
				
			>
				About & Skills
			</h2>
			
		
	</div> -->
</div>

<style>
	.card-wrapper {
		box-shadow: 4px 4px black;
	}
	.card-wrapper:hover {
		box-shadow: -4px -4px black;
	}
</style>
