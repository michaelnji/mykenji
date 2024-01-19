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
  delay:1500
});
	
})
</script>

<div class="flex flex-col md:gap-y-6 max-w-[84rem] md:h-max xl:!rounded-3xl lg:border-4 mx-auto border-black border-t-8 md:border-t-4 border-b-4 bg-yellow-100 md:p-12  px-6 py-12">
		<div class=' md:inline-flex '><HeroImg /></div>
		<h1
			class="text-6xl md:text-7xl heading-one text-left lg:text-9xl font-head-home opacity-0 !text-black font-extrabold !leading-[3.5rem] md:leading-[4.3rem] lg:!leading-[7rem] md:tracking-tighter"
			style=" transform:translateY(100px);"
		>
			Building beautiful UIs & fast backends.
		</h1>
		<p class=" lg:mt-6 mt-4   text-one !text-black text-2xl md:!text-4xl  lg:max-w-6xl !font-light opacity-0 "
		style=" transform: translateX(-60px);">
			<span>Building beautiful UIs and responsive backends, also an entrepreneur offline </span>
		</p>
	</div>