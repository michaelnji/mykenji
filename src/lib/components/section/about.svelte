<script lang="ts">
	import { skills } from '$lib/utils/skills';
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { Icon } from 'svelte-simples';

	let element: any;
	let skillEl:any;
	function animateEntry() {
		const items = document.querySelectorAll('.about-items');
		anime({
			targets: items,
			translateY: 0,
			opacity: 1,
			duration: 1200,
			delay: anime.stagger(300, { start: 600, easing: 'linear' })
		});
		anime({
			targets: '.about-img',
			opacity: 1,
			duration: 2000,
			delay: 800
		});
	}
	onMount(() => {
		
	});
</script>

<div class="  w-screen flex items-start justify-center" id="about">
	<div class="w-full">
		<IntersectionObserver
			{element}
			on:intersect={() => {
				animateEntry();
			}}
		>
			<div
				
				class=" flex px-3 md:px-6 flex-wrap md:flex-nowrap gap-4 xl:gap-12 mx-auto w-full items-center justify-center md:items-start mb-[16rem]"
			>
				<div
					class="bg-green-100 rounded-xl mt-12 relative p-6 border-2 md:border-4 border-gray-900 max-w-2xl w-full about-items opacity-0"
					style="transform: translateY(50px);"
				>
					<div bind:this={element}  class="absolute rounded-lg border-2 md:border-4 border-gray-900 p-3 bg-green-100 -top-8">
						<h2 class="font-head-home text-xl md:text-2xl xl:text-3xl">Hello There!</h2>
					</div>
					<p class="text-xl xl:text-2xl pt-4 md:pt-8 max-w-3xl opacity-80">
						I'm Michael, a self taught frontend web developer based in Cameroon with a knack for
						creating stuff with web technologies. I'm also into backend web development & a bit of
						graphic designing
					</p>
				</div>
				<div
					class="bg-orange-100 mt-12 rounded-xl relative p-6 border-2 md:border-4 border-gray-900 max-w-2xl w-full about-items opacity-0"
					style="transform: translateY(50px);"
				>
					<div class="absolute rounded-lg border-2 md:border-4 border-gray-900 p-3 bg-orange-100 -top-8">
						<h2 class="font-head-home text-xl lgmd:text-2xl xl:text-3xl">I love the web</h2>
					</div>
					<p class="text-xl xl:text-2xl pt-4 md:pt-8 max-w-3xl  opacity-80">
						I discovered web development in 2020 and I've been learning and working hard to build
						awesome web projects. I've fallen in love with frontend web development and look to get
						better at it everyday.
					</p>
				</div>
			</div>
		</IntersectionObserver>

		<!-- skills -->
		<IntersectionObserver
			element={skillEl}
			on:intersect={() => {
				anime({
			targets: '.skills .skill',
			scale: 1,
			duration: 800,
			delay: anime.stagger(150, {start:800,  easing: 'cubicBezier(.3, .4, .5, .3)' })
		});
				
			}}
		>
		<div 
			class="w-screen px-3 md:px-6 bg-pattern h-48  flex flex-col-reverse   items-center justify-center md:relative md:rotate-12 md:transform"
		>
			
		
		<div bind:this={skillEl}  class=" md:absolute skills border-4  border-gray-600 md:-rotate-12  rounded-3xl w-full mx-auto   gap-3 md:!max-w-[90%] xl:!max-w-6xl bg-gray-950 p-3 md:p-6 xl:p-12">
				<div class="font-head-home text-center text-3xl md:text-5xl xl:text-8xl  p-3 text-gray-50">
			<h2>I Build Using💻 </h2>
		</div>
				<div class="mt-4 xl:mt-8 flex flex-wrap justify-center">
					{#each skills as skill}
					<div 
						class={` p-3 flex items-center flex-col gap-3   skill rounded-xl`}
						style={`color: #fff !important; transform: scale(0)`}
					>
						<Icon
							name={skill.icon ? skill.icon : skill.name}
							color={`${skill.text}`}
							height="40"
							width="40"
							class='hidden md:block'
						/>
						<Icon
							name={skill.icon ? skill.icon : skill.name}
							color={`${skill.text}`}
							height="30"
							width="30"
							class='block md:hidden'
						/>
						<p class="text-sm md:text-2xl font-medium capitalize px-3 py-1.5  !bg-opacity-5 bg-gray-50 rounded-lg"
						
						>{skill.name}</p>
					</div>
				{/each}
				</div>
			</div>
			
		</div>
		</IntersectionObserver>
	</div>

	
</div>

