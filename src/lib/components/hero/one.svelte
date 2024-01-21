<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { IconMini } from 'svelte-heros-v2';
	import { Icon } from 'svelte-simples';
	import HeroImg from './../display/heroImg.svelte';
onMount(()=>{
	anime({
  targets: '.heading-one',
  translateY: '0px',
  opacity: {
	value: 1,
  },
  duration: 1300,
  delay:1000
});
	anime({
  targets: '.text-one',
  translateX: '0px',
  opacity: {
	value: '0.7',
	duration: 500
  },
  duration: 1000,
  delay:1500
});
let elements = document.querySelectorAll('.icon-one-a-sm');
		anime({
			targets: elements,
			opacity: {
				value: 1,
				delay: anime.stagger(100, {start:1400})
			},
			translateY: {
				value: '0px',
				delay: anime.stagger(50, {start:1400})
			},
			
			
		});
	
})
</script>

<div class="flex flex-col md:gap-y-6 max-w-[84rem]  md:h-max xl:!rounded-3xl xl:border-4 mx-auto border-black border-t-8 md:border-t-4 border-b-4 bg-yellow-100 md:p-12  px-6 py-12">
		<div class=' md:inline-flex '><HeroImg /></div>
		<h1
			class="text-5xl md:text-7xl heading-one text-left xl:text-9xl font-head-home opacity-0 !text-black font-extrabold !leading-[3.5rem] md:!leading-[4.3rem] xl:!leading-[7rem]"
			style=" transform:translateY(100px);"
		>
			Building beautiful uis & fast backends.
		</h1>
		<p class=" xl:mt-6 mt-4   text-one !text-black text-2xl md:!text-3xl  xl:max-w-6xl !font-light opacity-0 "
		style=" transform: translateX(-60px);">
			<span>Building beautiful UIs and responsive backends, also an entrepreneur offline </span>
		</p>
		<div class="md:hidden  mt-8">
		
		<div class="flex flex-wrap  gap-2">
			<a href="/" 
				class="p-4 rounded-md icon-one-a-sm w-full max-w-md shadow-lg font-medium font-head-home text-base bg-white flex items-center gap-3 border border-black dark:border-gray-700 dark:bg-gray-800 "
				style="opacity:0; transform:translateY(20px);"
				><Icon name="github" width="20" height="20" color="#333" /> View My Github 
			</a>
			<a href="/blog"
				class="p-3 rounded-md icon-one-a-sm shadow-lg font-medium w-full max-w-md font-head-home text-base bg-white flex items-center gap-3 border border-black dark:border-gray-700 dark:bg-gray-800"
				style="opacity:0; transform:translateY(20px);"
				><IconMini name="book-open-solid" width="20" height="20" color="#ff922b" /> Read my blog
			</a>
		</div>
	</div>
	</div>