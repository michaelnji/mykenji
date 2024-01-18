<script lang="ts">
	import HeroImg from './../display/heroImg.svelte';
	import  anime  from 'animejs'
	import {onMount} from 'svelte'
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
  delay:3000
});
	
})
</script>

<div class="flex flex-col gap-y-6 max-w-[84rem]  rounded-3xl border-4 mx-auto border-black bg-yellow-100 p-12">
		<div ><HeroImg /></div>
		<h1
			class="text-5xl heading-one  md:text-5xl text-center md:text-left lg:text-9xl font-head-home opacity-0 !text-black  font-bold leading-tight tracking-tighter"
			style="line-height: 6.5rem; transform: translateY(100px);"
		>
			I am a web developer & aspiring graphic designer
		</h1>
		<p class="mt-6  text-one !text-black !text-4xl  lg:max-w-6xl !font-light opacity-0"
		style="line-height: 6.5rem; transform: translateX(-60px);">
			<span>Building beautiful UIs and responsive backends, also an entrepreneur offline </span>
		</p>
	</div>