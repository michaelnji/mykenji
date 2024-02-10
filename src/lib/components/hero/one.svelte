<script lang="ts">
	import anime from 'animejs';
	import { onMount } from 'svelte';
	import { IconMini } from 'svelte-heros-v2';
	import { Icon } from 'svelte-simples';
	import HeroImg from './../display/heroImg.svelte';
	const colors = ['pink', 'purple', 'purple', 'red', 'blue', 'green', 'orange', 'yellow'];
	onMount(() => {
		anime({
			targets: '.heading-one',
			translateY: '0px',
			opacity: {
				value: 1
			},
			duration: 1300,
			delay: 1000
		});
		anime({
			targets: '.text-one',
			translateX: '0px',
			opacity: {
				value: '0.7',
				duration: 500
			},
			duration: 1000,
			delay: 1500
		});
		let elements = document.querySelectorAll('.icon-one-a-sm');
		anime({
			targets: elements,
			opacity: {
				value: 1,
				delay: 1400
			},
			translateY: '0px',
			delay: 1100
		});
	});
</script>

<div
	class={'flex flex-col justify-center md:gap-y-6 max-w-[84rem]  md:h-max xl:!rounded-3xl xl:border-4 mx-auto border-gray-900  md:border-t-4 md:border-b-4 md:bg-purple-100 md:p-12  px-6 py-12'}
>
	<div class=" md:inline-flex"><HeroImg /></div>
	<h1
		class="text-5xl md:text-7xl heading-one text-left xl:text-9xl font-head opacity-0 md:!text-gray-900 font-extrabold !leading-[3.5rem] md:!leading-[4.3rem] xl:!leading-[7rem]"
		style=" transform:translateY(100px);"
	>
		I am Michael Nji, a <span class="text">Web</span> Developer
	</h1>
	<p
		class=" xl:mt-6 mt-4 text-one md:!text-gray-900 text-xl md:!text-3xl xl:max-w-6xl !font-light opacity-0"
		style=" transform: translateX(-60px);"
	>
		<span>Building beautiful UIs and responsive backends, also an entrepreneur offline </span>
	</p>
	<div class="md:hidden mt-8">
		<div
			class="flex flex-wrap items-baseline gap-2 icon-one-a-sm"
			style="opacity:0; transform:translateY(20px);"
		>
			<a
				href="https://github.com/michaelnji"
				class="btn btn-primary btn-lg w-full max-w-sm justify-center"
				><Icon name="github" width="26" height="26" /> View My Github
			</a>
			<a href="/blog" class="btn btn-lg w-full max-w-sm justify-center"
				><IconMini name="book-open-solid" width="26" height="26" /> Read my blog
			</a>
		</div>
	</div>
</div>
