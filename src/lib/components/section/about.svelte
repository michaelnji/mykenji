<script lang="ts">
	import { skills } from '$lib/utils/skills';
	import anime from 'animejs';
	import IntersectionObserver from 'svelte-intersection-observer';
	import Svelte from 'svelte-simples/Svelte.svelte';
	import Supabase from 'svelte-simples/Supabase.svelte';
	import Javascript from 'svelte-simples/Javascript.svelte';
	import Tailwindcss from 'svelte-simples/Tailwindcss.svelte';
	import Python from 'svelte-simples/Python.svelte';
	import SCSS from 'svelte-simples/Sass.svelte';
	import Nodejs from 'svelte-simples/Nodedotjs.svelte';
	import Gulp from 'svelte-simples/Gulp.svelte';
	import Github from 'svelte-simples/Github.svelte';
	import Typescript from 'svelte-simples/Typescript.svelte';
	import Golang from 'svelte-simples/Go.svelte';
	import Nuxt from 'svelte-simples/Nuxtdotjs.svelte';
	let element: any;
	let skillEl: any;

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
				class=" flex px-3 md:px-6 flex-wrap md:flex-nowrap gap-4 xl:gap-12 mx-auto w-full items-center justify-center md:items-start mb-[9rem]"
			>
				<div
					class="bg-green-100 rounded-xl mt-12 relative p-6 border-2 md:border-4 border-gray-900 max-w-2xl w-full about-items opacity-0"
					style="transform: translateY(50px);"
				>
					<div
						bind:this={element}
						class="absolute rounded-lg border-2 md:border-4 border-gray-900 p-3 bg-green-100 -top-8"
					>
						<h2 class="font-head font-bold text-xl md:text-2xl xl:text-3xl text-gray-950">
							Hello There!
						</h2>
					</div>
					<p class="text-xl xl:text-2xl pt-4 md:pt-8 max-w-3xl opacity-80 text-gray-900">
						I'm Michael, a self taught frontend web developer based in Cameroon with a knack for
						creating stuff with web technologies. I'm also into backend web development & a bit of
						graphic designing
					</p>
				</div>
				<div
					class="bg-orange-100 mt-12 rounded-xl relative p-6 border-2 md:border-4 border-gray-900 max-w-2xl w-full about-items opacity-0"
					style="transform: translateY(50px);"
				>
					<div
						class="absolute rounded-lg border-2 md:border-4 border-gray-900 p-3 bg-orange-100 -top-8"
					>
						<h2 class="font-head text-xl md:text-2xl xl:text-3xl text-gray-950 font-bold">
							I love the web
						</h2>
					</div>
					<p class="text-xl xl:text-2xl pt-4 md:pt-8 max-w-3xl opacity-80 text-gray-900">
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
					delay: anime.stagger(150, { start: 400, easing: 'cubicBezier(.3, .4, .5, .3)' })
				});
			}}
		>
			<div class="  skills w-full mx-auto md:!max-w-[90%] xl:!max-w-6xl">
				<div class="font-head font-bold text-center text-2xl md:text-3xl xl:text-4xl">
					<h2>I build using</h2>
				</div>
				<div bind:this={skillEl} />
				<div class="mt-8 xl:mt-8 flex flex-wrap justify-center">
					{#each skills as skill}
						{#if skill.name === 'svelte'}
						<div
							class={` p-3 m-3 flex items-center flex-col gap-3   skill rounded-xl !bg-opacity-10`}
							style={`color: #fff !important; background-color:${skill.color}; transform: scale(0)`}
						>
						
							<Svelte
								
								color={`${skill.text}`}
								height="60"
								width="60"
								class="hidden md:block"
							/>
							<Svelte
								
								color={`${skill.text}`}
								height="40"
								width="40"
								class="block md:hidden"
							/>
						</div>
						{:else if skill.name === 'supabase'}
						<div
							class={` p-3 m-3 flex items-center flex-col gap-3   skill rounded-xl !bg-opacity-10`}
							style={`color: #fff !important; background-color:${skill.color}; transform: scale(0)`}
						>
						
							<Supabase
								
								color={`${skill.text}`}
								height="60"
								width="60"
								class="hidden md:block"
							/>
							<Supabase
								
								color={`${skill.text}`}
								height="40"
								width="40"
								class="block md:hidden"
							/>
						</div>
						{:else if skill.name === 'javascript'}
						<div
							class={` p-3 m-3 flex items-center flex-col gap-3   skill rounded-xl !bg-opacity-10`}
							style={`color: #fff !important; background-color:${skill.color}; transform: scale(0)`}
						>
						
							<Javascript
								
								color={`${skill.text}`}
								height="60"
								width="60"
								class="hidden md:block"
							/>
							<Javascript
								
								color={`${skill.text}`}
								height="40"
								width="40"
								class="block md:hidden"
							/>
						</div>
						{:else if skill.name === 'tailwindcss'}
						<div
							class={` p-3 m-3 flex items-center flex-col gap-3   skill rounded-xl !bg-opacity-10`}
							style={`color: #fff !important; background-color:${skill.color}; transform: scale(0)`}
						>
						
							<Tailwindcss
								
								color={`${skill.text}`}
								height="60"
								width="60"
								class="hidden md:block"
							/>
							<Tailwindcss
								
								color={`${skill.text}`}
								height="40"
								width="40"
								class="block md:hidden"
							/>
						</div>
						{:else if skill.name === 'python'}
						<div
							class={` p-3 m-3 flex items-center flex-col gap-3   skill rounded-xl !bg-opacity-10`}
							style={`color: #fff !important; background-color:${skill.color}; transform: scale(0)`}
						>
						
							<Python
								
								color={`${skill.text}`}
								height="60"
								width="60"
								class="hidden md:block"
							/>
							<Python
								
								color={`${skill.text}`}
								height="40"
								width="40"
								class="block md:hidden"
							/>
						</div>
						{:else if skill.name === 'scss'}
						<div
							class={` p-3 m-3 flex items-center flex-col gap-3   skill rounded-xl !bg-opacity-10`}
							style={`color: #fff !important; background-color:${skill.color}; transform: scale(0)`}
						>
						
							<SCSS
								
								color={`${skill.text}`}
								height="60"
								width="60"
								class="hidden md:block"
							/>
							<SCSS
								
								color={`${skill.text}`}
								height="40"
								width="40"
								class="block md:hidden"
							/>
						</div>
						{:else if skill.name === 'nodejs'}
						<div
							class={` p-3 m-3 flex items-center flex-col gap-3   skill rounded-xl !bg-opacity-10`}
							style={`color: #fff !important; background-color:${skill.color}; transform: scale(0)`}
						>
						
							<Nodejs
								
								color={`${skill.text}`}
								height="60"
								width="60"
								class="hidden md:block"
							/>
							<Nodejs
								
								color={`${skill.text}`}
								height="40"
								width="40"
								class="block md:hidden"
							/>
						</div>
						{:else if skill.name === 'gulp'}
						<div
							class={` p-3 m-3 flex items-center flex-col gap-3   skill rounded-xl !bg-opacity-10`}
							style={`color: #fff !important; background-color:${skill.color}; transform: scale(0)`}
						>
						
							<Gulp
								
								color={`${skill.text}`}
								height="60"
								width="60"
								class="hidden md:block"
							/>
							<Gulp
								
								color={`${skill.text}`}
								height="40"
								width="40"
								class="block md:hidden"
							/>
						</div>
						{:else if skill.name === 'github'}
						<div
							class={` p-3 m-3 flex items-center flex-col gap-3   skill rounded-xl !bg-opacity-10`}
							style={`color: #fff !important; background-color:${skill.color}; transform: scale(0)`}
						>
						
							<Github
								
								color={`${skill.text}`}
								height="60"
								width="60"
								class="hidden md:block"
							/>
							<Github
								
								color={`${skill.text}`}
								height="40"
								width="40"
								class="block md:hidden"
							/>
						</div>
						{:else if skill.name === 'typescript'}
						<div
							class={` p-3 m-3 flex items-center flex-col gap-3   skill rounded-xl !bg-opacity-10`}
							style={`color: #fff !important; background-color:${skill.color}; transform: scale(0)`}
						>
						
							<Typescript
								
								color={`${skill.text}`}
								height="60"
								width="60"
								class="hidden md:block"
							/>
							<Typescript
								
								color={`${skill.text}`}
								height="40"
								width="40"
								class="block md:hidden"
							/>
						</div>
						{:else if skill.name === 'golang'}
						<div
							class={` p-3 m-3 flex items-center flex-col gap-3   skill rounded-xl !bg-opacity-10`}
							style={`color: #fff !important; background-color:${skill.color}; transform: scale(0)`}
						>
						
							<Golang
								
								color={`${skill.text}`}
								height="60"
								width="60"
								class="hidden md:block"
							/>
							<Golang
								
								color={`${skill.text}`}
								height="40"
								width="40"
								class="block md:hidden"
							/>
						</div>
						{:else if skill.name === 'Nuxt'}
						<div
							class={` p-3 m-3 flex items-center flex-col gap-3   skill rounded-xl !bg-opacity-10`}
							style={`color: #fff !important; background-color:${skill.color}; transform: scale(0)`}
						>
						
							<Nuxt
								
								color={`${skill.text}`}
								height="60"
								width="60"
								class="hidden md:block"
							/>
							<Nuxt
								
								color={`${skill.text}`}
								height="40"
								width="40"
								class="block md:hidden"
							/>
						</div>
						{/if}
					{/each}
				</div>
			</div>
		</IntersectionObserver>
	</div>
</div>
