<script lang="ts">
	import Image from './../display/Image.svelte';
	import { Icon } from 'svelte-simples';
	import i from '$lib/images/me.jpg';
	import ImageLoader from '../display/ImageLoader.svelte';
</script>

<div class="!my-24 mx-6" id="about">
	<section class=" px-6">
		
		<div class="mt-6 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="max-w-xl rounded-2xl">
				<ImageLoader src={i}  classes=" rounded-2xl shadow-2xl" />
			</div>
			<div>
				<h1 class="text-3xl w-full max-w-6xl mx-auto md:text-4xl font-extrabold font-head text-center">
			About Me😃
		</h1>
				<p class="mt-6  mx-auto text-center text-lg opacity-75">
					Cameroonian & a self taught web developer, I picked up coding in 2016 as a way to keep
					myself busy during the teacher's strike and has since then
					<b class="text-primary">loved it!</b>. Building websites is something I enjoy and have
					been learning more and more of everyday.
				</p>
				
				<section class="pt-12 px-6">
		<div class="w-full  grid grid-cols-1 lg:grid-cols-2  gap-20 ">
			<div>
				<h2 class="text-2xl w-full max-w-6xl !mx-auto font-extrabold font-head text-center mb-3">
					I am <b class="text-primary">Learning</b>
				</h2>
				<div class="w-full  flex-wrap justify-center !mx-auto flex items-center gap-3 mt-8">
					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-2xl">
						<Icon name="astro" color="#f03e3e" height="68" width="58" /> 
					</div>

					<div class="p-2 rounded-xl  bg-white shadow-2xl">
						<Icon name="github" color="black" height="68" width="58" />
					</div>
					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-2xl">
						<Icon name="typescript" color="#339af0" height="68" width="58" />
					</div>
				</div>
			</div>
			<div>
				<h2 class="text-2xl w-full max-w-6xl !mx-auto font-extrabold font-head text-center mb-3">
					I am <b class="text-primary">Using</b>
				</h2>
				<div class="w-full  flex-wrap justify-center !mx-auto flex items-center gap-3 mt-8">
					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-2xl">
						<Icon name="visualstudiocode" color="#1c7ed6" height="68" width="58" />
					</div>

					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-2xl">
						<Icon name="googlechrome" color="#51cf66" height="68" width="58" />
					</div>
					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-2xl">
						<Icon name="figma" color="#fa5252" height="68" width="58" />
					</div>
				</div>
			</div>
			<div>
				<h2 class="text-2xl w-full max-w-6xl !mx-auto font-extrabold font-head text-center mb-3">
					I know <b class="text-primary">a bit of</b>
				</h2>
				<div class="w-full  flex-wrap justify-center !mx-auto flex items-center gap-3 mt-8">
					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-2xl">
						<Icon name="c" color="#1c7ed6" height="68" width="58" />
					</div>

					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-2xl">
						<Icon name="python" color="#51cf66" height="68" width="58" />
					</div>
					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-2xl">
						<Icon name="vuedotjs" color="#51cf66" height="68" width="58" />
					</div>
				</div>
			</div>
		</div>
	</section>
			</div>
		</div>
	</section>

	
</div>
