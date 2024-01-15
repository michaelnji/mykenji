<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import i from '$lib/images/me.jpg';
	import { Icon } from 'svelte-simples';
	import Quote from '../misc/quote.svelte';
</script>

<div class="!mb-24 lg:mt-16 w-full lg:max-w-7xl max-w-3xl mx-auto" id="about">
	<section class=" px-6 w-full">
		<div
			class="mt-6 w-full flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 justify-start max-w-7xl mx-auto"
		>
			<div class="lg:max-w-xl rounded-2xl mx-auto" in:fly={{ y: 100, duration: 1000 }}>
				<img
					src={i}
					class=" w-full hidden lg:block !max-w-lg card-wrapper transition-shadow border-2 border-black ease-in-out duration-300 mx-auto mb-6 lg:mb-0 rounded-3xl"
					alt=" of me standing"
				/>
			</div>
			<div in:fade={{ duration: 1000 }}>
				<div class="lg:max-w-4xl text-center md:text-left">
					<h1 class="text-3xl w-full md:text-4xl font-bold font-head mx-auto">
						Little bits about me
					</h1>
					<p class="mx-auto mt-5 text-2xl lg:max-w-3xl opacity-80">
						Cameroonian & a self taught frontend (and sometimes backend) web developer, I picked up
						coding in 2016 as a way to keep myself busy during the teacher's strike and has <b
							class="text-primary dark:text-indigo-200 italic">loved it since 2021</b
						>. . <br /> Building websites is something I enjoy and have been learning more and more of
						it everyday.
					</p>
					<div class=" my-12 lg:max-w-xl">
						<Quote>I had aspirations of becoming a Cardiologist before switching to tech.</Quote>
					</div>
					<div class="mt-3 lg:max-w-3xl grid md:grid-cols-2 lg:gap-6 gap-12">
					<div>
						<h2 class="text-3xl font-bold ">Skills</h2>
						<div class="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white flex items-center gap-x-2 border border-gray-400 dark:border-gray-700 dark:bg-gray-800"
								><Icon name="supabase" width="20" height="20" color="#51cf66" />Supabase
							</span>
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white flex items-center gap-x-2 border border-gray-400 dark:border-gray-700 dark:bg-gray-800"
								><Icon name="svelte" width="20" height="20" color="#ff922b" />Svelte
							</span>
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white flex items-center gap-x-2 border border-gray-400 dark:border-gray-700 dark:bg-gray-800"
								><Icon name="javascript" width="20" height="20" color="#f0db4f" />Javascript
							</span>
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white flex items-center gap-x-2 border border-gray-400 dark:border-gray-700 dark:bg-gray-800"
								><Icon name="tailwindcss" width="20" height="20" color="#20c997" />Tailwind
							</span>
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white flex items-center gap-x-2 border border-gray-400 dark:border-gray-700 dark:bg-gray-800"
								><Icon name="sass" width="20" height="20" color="#cd6799" />SASS
							</span>
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white flex items-center gap-x-2 border border-gray-400 dark:border-gray-700 dark:bg-gray-800"
								><Icon name="python" width="20" height="20" color="#3498db" />Python
							</span>
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white flex items-center gap-x-2 border border-gray-400 dark:border-gray-700 dark:bg-gray-800"
								><Icon name="nodedotjs" width="20" height="20" color="#37b24d" />Nodejs
							</span>
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white text-[#333] flex items-center gap-x-2 border border-gray-400 dark:border-gray-700"
								><Icon name="github" width="20" height="20" color="#333" />Github
							</span>
						</div>
					</div>
					<div>
						<h2 class="text-3xl font-bold">Learning in 2024</h2>
						<div class="flex flex-wrap gap-3 mt-3 justify-center md:justify-start mb-6 lg:mb-0">
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white flex items-center gap-x-2 border border-gray-400 dark:border-gray-700 dark:bg-gray-800"
								><Icon name="go" width="20" height="20" color="#3498db" />Go
							</span>
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white flex items-center gap-x-2 border border-gray-400 dark:border-gray-700 dark:bg-gray-800"
								><Icon name="nuxtdotjs" width="20" height="20" color="#41b883" />Vuejs
							</span>
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white flex items-center gap-x-2 border border-gray-400 dark:border-gray-700 dark:bg-gray-800"
								><Icon name="typescript" width="20" height="20" color="#007acc" />Typescript
							</span>
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white flex items-center gap-x-2 border border-gray-400 dark:border-gray-700 dark:bg-gray-800"
								><Icon name="mongodb" width="20" height="20" color="#47a248" />MongoDB
							</span>
							
							<span
								class="py-1 px-3 rounded-md shadow-lg font-bold bg-white flex items-center gap-x-2 border border-gray-400 dark:border-gray-700 dark:bg-gray-800"
								><Icon name="linux" width="20" height="20" color="#f0db4f" />Linux OS
							</span>
							
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.card-wrapper {
		box-shadow: 4px 4px black;
	}
	.card-wrapper:hover {
		box-shadow: -4px -4px black;
	}
</style>
