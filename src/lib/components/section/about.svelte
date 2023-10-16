<script lang="ts">
	import { Icon } from 'svelte-simples';
</script>

<div class="py-12 lg:py-24" id="about">
	<section class=" px-6">
		<h1 class="text-3xl w-full max-w-6xl mx-auto md:text-4xl font-extrabold font-head text-center">
			About Myke
		</h1>
		<p class="mt-6 max-w-3xl mx-auto text-center text-lg opacity-90">
			Cameroonian & a self taught web developer, I picked up coding in 2016
			as a way to keep myself busy during the teacher's strike and has since then
			<b class="text-primary">loved it!</b>. Building websites is something I enjoy and have been
			learning more and more of everyday.
		</p>
		<p class="mt-6 max-w-3xl mx-auto text-center text-lg opacity-90">
			I am currently working hard to build a reputable github portfolio (you should <a
				href="https://github.com/michaelnji"
				class="text-primary underline">check it out</a
			>🍀) so as to build my skills & fill up this ever growing void of curiosity in me
		</p>
	</section>

	<section class="pt-12 px-6">
		<div class="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<div class="rounded-xl p-4">
				<h2 class="text-2xl w-full max-w-6xl !mx-auto font-extrabold font-head text-center mb-3">
					I am <b class="text-primary">Learning</b>
				</h2>
				<div class="w-full max-w-xl flex-wrap justify-center p-6 !mx-auto flex items-center gap-3">
					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-xl">
						<Icon name="react" color="#339af0" height="68" width="68" />
					</div>

					<div class="p-2 rounded-xl bg-white shadow-xl">
						<Icon name="github" color="black" height="68" width="68" />
					</div>
					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-xl">
						<Icon name="typescript" color="#339af0" height="68" width="68" />
					</div>
				</div>
			</div>
			<div class="rounded-xl p-4">
				<h2 class="text-2xl w-full max-w-6xl !mx-auto font-extrabold font-head text-center mb-3">
					I am <b class="text-primary">Using</b>
				</h2>
				<div class="w-full max-w-xl flex-wrap justify-center p-6 !mx-auto flex items-center gap-3">
					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-xl">
						<Icon name="visualstudiocode" color="#1c7ed6" height="68" width="68" />
					</div>

					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-xl">
						<Icon name="googlechrome" color="#51cf66" height="68" width="68" />
					</div>
					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-xl">
						<Icon name="figma" color="#fa5252" height="68" width="68" />
					</div>
				</div>
			</div>
			<div class="rounded-xl p-4">
				<h2 class="text-2xl w-full max-w-6xl !mx-auto font-extrabold font-head text-center mb-3">
					I know <b class="text-primary">a bit of</b>
				</h2>
				<div class="w-full max-w-xl flex-wrap justify-center p-6 !mx-auto flex items-center gap-3">
					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-xl">
						<Icon name="c" color="#1c7ed6" height="68" width="68" />
					</div>

					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-xl">
						<Icon name="python" color="#51cf66" height="68" width="68" />
					</div>
					<div class="p-2 rounded-xl dark:bg-base-200 bg-white shadow-xl">
						<Icon name="vuedotjs" color="#51cf66" height="68" width="68" />
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
