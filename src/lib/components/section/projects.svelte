<script lang="ts">
	  import anime from 'animejs';
	import IntersectionObserver from 'svelte-intersection-observer';
	import kawaiii from '$lib/images/kawaiii.png';
	import byte from '$lib/images/bytepay.png';
	import wabuzz from '$lib/images/wabuzz.png';
	import { Icon } from 'svelte-simples';
	let el:HTMLElement
</script>
<IntersectionObserver
			element={el}
			on:intersect={() => {
				anime({
			targets: '#projects .project',
			translateY: '0px',
      opacity: {
		value: 1,
		duration: 900
	  },
			duration: 1900,
			 delay: anime.stagger(250, {start:800,  easing: 'cubicBezier(.3, .4, .5, .3)' })
		});
				
			}}
		>
<div class="py-12 xl:py-24" id="projects">
	<section class=" px-3 md:px-6">
		<h1 class="md:text-7xl w-full max-w-6xl mx-auto text-4xl font-bold font-head-home text-center">
			Some of my work
		</h1>
		<p class="mt-6 max-w-3xl mx-auto text-center text-xl opacity-70">
			I have been working hard lately to build some pretty awesome stuff out here:
		</p>
	</section>

	<section class="pt-12 px-3 md:px-6">
		<div
			class="w-full md:max-w-8xl xl:max-w-[95%] mx-auto grid grid-cols-1 items-start xl:grid-cols-3 md:grid-cols-2 p gap-6" bind:this={el}
		>
			<div class=" group project w-full !rounded-2xl" style="opacity: 0; transform:translateY(100px)">
				<div class="  bg-indigo-500 border-4 border-gray-950 p-6 !rounded-2xl">
					<div class="w-full flex-col !justify-between gap-12 items-start">
						<div class=" w-full border-2 border-indigo-950 rounded-2xl">
							<img
								src={byte}
								alt=""
								class="rounded-2xl group-hover:scale-105 transition duration-300"
							/>
						</div>
						<div class="flex flex-wrap mt-8 gap-3">
							<p
								class="px-3 py-1 font-bold bg-indigo-950 rounded-lg text-indigo-300 text-sm font-mono transition duration-1000"
							>
								#unfinished
							</p>
							<p
								class="px-3 py-1 font-bold bg-indigo-950 rounded-lg text-indigo-300 text-sm font-mono transition duration-1000"
							>
								#SaaS
							</p>
							<p
								class="px-3 py-1 font-bold bg-indigo-950 rounded-lg text-indigo-300 text-sm font-mono transition duration-1000"
							>
								#website
							</p>
						</div>
					</div>
					<div class="mt-4">
						<h1 class="!md:text-8xl text-6xl capitalize text-indigo-50 font-bold font-head-home">
							BytePay
						</h1>
						<p class="mt-3 text-indigo-50 text-lg md:text-2xl opacity-90">
							A website to buy and create virtual credit cards.
						</p>
						<div class="mt-4 p-6 rounded-2xl bg-indigo-800 bg-opacity-50">
							<p class="font-medium text-indigo-50 text-2xl opacity-90">Built using</p>
							<div class="flex flex-wrap gap-3 mt-3">
								<p
									class="p-2 font-bold text-indigo-50 rounded-lg bg-indigo-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="javascript" width={'30'} height="30" />
								</p>
								<p
									class="p-2 font-bold text-indigo-50 rounded-lg bg-indigo-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="tailwindcss" width={'30'} height="30" />
								</p>
								<p
									class="p-2 font-bold text-indigo-50 rounded-lg bg-indigo-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="supabase" width={'30'} height="30" />
								</p>
								<p
									class="p-2 font-bold text-indigo-50 rounded-lg bg-indigo-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="nodedotjs" width={'30'} height="30" />
								</p>

								<p
									class="p-2 font-bold text-indigo-50 rounded-lg bg-indigo-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="svelte" width={'30'} height="30" />
								</p>
							</div>
							<div class="mt-8 flex gap-3">
								<a
									href="https://bytepay.vercel.app"
									target="_blank"
									class="btn font-bold !bg-indigo-300 !text-indigo-600">Preview</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class=" group project w-full !rounded-2xl" style="opacity: 0; transform:translateY(100px)">
				<div class="  bg-green-500 border-4 border-gray-950 p-6 !rounded-2xl">
					<div class="w-full flex-col !justify-between gap-12 items-start">
						<div class=" w-full border-2 border-green-950 rounded-2xl">
							<img
								src={wabuzz}
								alt=""
								class="rounded-2xl group-hover:scale-105 transition duration-300"
							/>
						</div>
						<div class="flex flex-wrap mt-8 gap-3">
							<p
								class="px-3 py-1 font-bold bg-green-950 rounded-lg text-green-300 text-sm font-mono transition duration-1000"
							>
								#complete
							</p>
							<p
								class="px-3 py-1 font-bold bg-green-950 rounded-lg text-green-300 text-sm font-mono transition duration-1000"
							>
								#side-project
							</p>
							<p
								class="px-3 py-1 font-bold bg-green-950 rounded-lg text-green-300 text-sm font-mono transition duration-1000"
							>
								#website
							</p>
						</div>
					</div>
					<div class="mt-4">
						<h1 class="!md:text-8xl text-6xl capitalize text-green-50 font-bold font-head-home">
							Wabuzz
						</h1>
						<p class="mt-3 text-green-50 text-lg md:text-2xl opacity-90">
							A website to grow Whatsapp contacts via automated contact gathering.
						</p>
						<div class="mt-4 p-6 rounded-2xl bg-green-800 bg-opacity-50">
							<p class="font-medium text-green-50 text-2xl opacity-90">Built using</p>
							<div class="flex flex-wrap gap-3 mt-3">
								<p
									class="p-2 font-bold text-green-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="typescript" width={'30'} height="30" />
								</p>
								<p
									class="p-2 font-bold text-green-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="tailwindcss" width={'30'} height="30" />
								</p>
								<p
									class="p-2 font-bold text-green-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="supabase" width={'30'} height="30" />
								</p>
								<p
									class="p-2 font-bold text-green-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="nodedotjs" width={'30'} height="30" />
								</p>
								<p
									class="p-2 font-bold text-green-50 rounded-lg bg-green-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="svelte" width={'30'} height="30" />
								</p>
							</div>
							<div class="mt-8 flex gap-3">
								<a
									href="https://wabuzz.vercel.app"
									target="_blank"
									class="btn font-bold !bg-green-300 !text-green-600">Preview</a
								>
								<a
									href="https://github.com/michaelnji/wabuzz"
									target="_blank"
									class="btn font-bold bg-black">Github</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class=" group project w-full !rounded-2xl" style="opacity: 0; transform:translateY(100px)">
				<div class="  bg-pink-500 border-4 border-gray-950 p-6 !rounded-2xl">
					<div class="w-full flex-col !justify-between gap-12 items-start">
						<div class=" w-full border-2 border-pink-950 rounded-2xl">
							<img
								src={kawaiii}
								alt=""
								class="rounded-2xl group-hover:scale-105 transition duration-300"
							/>
						</div>
						<div class="flex flex-wrap mt-8 gap-3">
							<p
								class="px-3 py-1 font-bold bg-pink-950 rounded-lg text-pink-300 text-sm font-mono transition duration-1000"
							>
								#complete
							</p>
							<p
								class="px-3 py-1 font-bold bg-pink-950 rounded-lg text-pink-300 text-sm font-mono transition duration-1000"
							>
								#side-project
							</p>
							<p
								class="px-3 py-1 font-bold bg-pink-950 rounded-lg text-pink-300 text-sm font-mono transition duration-1000"
							>
								#website
							</p>
						</div>
					</div>
					<div class="mt-4">
						<h1 class="!md:text-8xl text-6xl capitalize text-pink-950 font-bold font-head-home">
							Kawaiii
						</h1>
						<p class="mt-3 text-pink-950 text-lg md:text-2xl opacity-90">
							A website to display female manga characters.
						</p>
						<div class="mt-4 p-6 rounded-2xl bg-pink-800 bg-opacity-50">
							<p class="font-medium text-pink-50 text-2xl opacity-90">Built using</p>
							<div class="flex flex-wrap gap-3 mt-3">
								<p
									class="p-2 font-bold text-pink-50 rounded-lg bg-pink-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="typescript" width={'30'} height="30" />
								</p>
								<p
									class="p-2 font-bold text-pink-50 rounded-lg bg-pink-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="tailwindcss" width={'30'} height="30" />
								</p>

								<p
									class="p-2 font-bold text-pink-50 rounded-lg bg-pink-950 text-xs font-mono transition duration-1000"
								>
									<Icon name="svelte" width={'30'} height="30" />
								</p>
							</div>
							<div class="mt-8 flex gap-3">
								<a
									href="https://kawaiii.vercel.app"
									target="_blank"
									class="btn font-bold !bg-pink-300 !text-pink-600">Preview</a
								>
								<a
									href="https://github.com/michaelnji/kawaiii"
									target="_blank"
									class="btn font-bold bg-black">Github</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
</IntersectionObserver>
<style>
	/* .kawaiii-bg:hover{
		background: url('../../images/kawaiii.png') !important;
		background-repeat: repeat !important;
}
	.byte-bg:hover{
		background: url('../../images/bytepay.png') !important;
		background-repeat: repeat !important;
} */
</style>
