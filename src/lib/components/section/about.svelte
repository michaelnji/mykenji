<script lang="ts">
	import i from '$lib/images/me.jpg';
	import { Icon } from 'svelte-simples';
</script>

;
<div class="!mb-24 mt-6  w-full " id="about">
	<section class=" px-6 w-full">
		<div class="mt-6 w-full flex flex-col-reverse lg:flex-row gap-6">
			<div class="max-w-xl rounded-2xl mx-auto">
				<img src={i} class=" w-full !max-w-lg card-wrapper transition-shadow border-2 border-black ease-in-out duration-300  mx-auto mb-6 lg:mb-0" alt=" of me standing" />
			</div>
			<div class='!max-w-3xl'>
				<h1
					class="text-3xl w-full max-w-6xl mx-auto md:text-4xl font-extrabold font-head text-center"
				>
					About Me🚀👨‍💻
				</h1>
				<p class="mt-6 mx-auto max-w-xl text-center text-lg opacity-75">
					Cameroonian & a self taught web developer, I picked up coding in 2016 as a way to keep
					myself busy during the teacher's strike and has since then
					<b class="text-primary dark:text-indigo-200">loved it!</b>. Building websites is something I enjoy and have
					been learning more and more of everyday.
				</p>

				<section class="pt-12 px-6">
					<div class="mb-20">
						<h2
							class="text-2xl w-full max-w-6xl !mx-auto font-extrabold font-head text-center mb-3"
						>
							My <b class="text-primary dark:text-indigo-200">Skills</b>
						</h2>
						<div class="w-full flex-wrap justify-center !mx-auto flex items-center gap-3 mt-8">
							<div
								class="py-2 px-4  flex gap-x-2 font-head bg-[#ff922b] bg-opacity-10 text-[#ff922b] border-2 border-[#ff922b] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
							>
								<Icon name="svelte" color="#ff922b" /> SVELTE
							</div>
							<div
								class="py-2 px-4  flex gap-x-2 font-head bg-[#37b24d] bg-opacity-10 text-[#37b24d] border-2 border-[#37b24d] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
							>
								<Icon name="nodedotjs" color="#37b24d" /> NODEJS
							</div>
							<div
								class="py-2 px-4  flex gap-x-2 font-head bg-[#20c997] bg-opacity-10 text-[#20c997] border-2 border-[#20c997] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
							>
								<Icon name="tailwindcss" color="#20c997" /> TAILWINDCSS
							</div>

							<div
								class="py-2 px-4  flex gap-x-2 font-head bg-[#51cf66] bg-opacity-10 text-[#51cf66] border-2 border-[#51cf66] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
							>
								<Icon name="supabase" color="#51cf66" /> SUPABASE
							</div> 
							<div
								class="py-2 px-4  flex gap-x-2 font-head bg-[#f06595] bg-opacity-10 text-[#f06595] border-2 border-[#f06595] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
							>
								<Icon name="sass" color="#f06595" /> SCSS
							</div> 
							<div
								class="py-2 px-4  flex gap-x-2 font-head bg-[#fcc419] bg-opacity-10 text-[#fcc419] border-2 border-[#fcc419] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
							>
								<Icon name="javascript" color="#fcc419" /> JAVASCRIPT
							</div> 
							<div
								class="py-2 px-4  flex gap-x-2 font-head bg-[#4dabf7] bg-opacity-10 text-[#4dabf7] border-2 border-[#4dabf7] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
							>
								<Icon name="css3" color="#4dabf7" /> CSS
							</div>
							<div
									class="py-2 px-4  flex gap-x-2 font-head bg-[black] dark:bg-gray-100 text-black bg-opacity-10 border-2 border-[black] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
								>
									<Icon name="vercel" color="black" /> VERCEL
								</div>
						</div>
					</div>
					
					<div class="!w-full  grid grid-cols-1 lg:grid-cols-2  gap-y-20 lg:gap-6">
						<div>
							<h2
								class="text-2xl w-full max-w-6xl !mx-auto font-extrabold font-head text-center mb-3"
							>
								I'm <b class="text-primary dark:text-indigo-200">Learning</b>
							</h2>
							<div class=" flex-wrap justify-center lg:!mx-auto flex items-center gap-3 mt-8">
								<div
									class="py-2 px-4  flex gap-x-2 font-head bg-[#339af0] bg-opacity-10 text-[#339af0] border-2 border-[#339af0] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
								>
									<Icon name="go" color="#339af0" /> GO
								</div>
								<div
									class="py-2 px-4  flex gap-x-2 font-head bg-[black] dark:bg-gray-100 text-black bg-opacity-10 border-2 border-[black] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
								>
									<Icon name="github" color="black" /> GITHUB
								</div>

								<div
									class="py-2 px-4  flex gap-x-2 font-head bg-[#1971c2] bg-opacity-10 text-[#1971c2] border-2 border-[#1971c2] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
								>
									<Icon name="typescript" color="#1971c2" /> TYPESCRIPT
								</div> 
								<div
									class="py-2 px-4  flex gap-x-2 font-head bg-[#51cf66] bg-opacity-10 text-[#51cf66] border-2 border-[#51cf66] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
								>
									<Icon name="duolingo" color="#51cf66" /> SPANISH
								</div>
							</div>
						</div>
						<div>
							<h2
								class="text-2xl w-full max-w-6xl !mx-auto font-extrabold font-head text-center mb-3"
							>
								I'm <b class="text-primary dark:text-indigo-200">Using</b>
							</h2>
							<div class="w-full flex-wrap justify-center lg:!mx-auto flex items-center gap-3 mt-8">
							<div
									class="py-2 px-4  flex gap-x-2 font-head bg-[#1c7ed6] bg-opacity-10 text-[#1c7ed6] border-2 border-[#1c7ed6] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
								>
									<Icon name="visualstudiocode" color="#1c7ed6" /> VSCODE
								</div>
							<div
									class="py-2 px-4  flex gap-x-2 font-head bg-[#51cf66] bg-opacity-10 text-[#51cf66] border-2 border-[#51cf66] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
								>
									<Icon name="googlechrome" color="#51cf66" /> CHROME
								</div> 
							<div
									class="py-2 px-4  flex gap-x-2 font-head bg-[#845ef7] bg-opacity-10 text-[#845ef7] border-2 border-[#845ef7] hover:rotate-3 hover:scale-x-90 transition-transform duration-500 !text-xs items-center"
								>
									<Icon name="canva" color="#845ef7" /> CANVA
								</div>
							
								

								
								
								
							</div>
						</div>
						<div>
							<!-- <h2 class="text-2xl w-full max-w-6xl !mx-auto font-extrabold font-head text-center mb-3">
					I know <b class="text-primary">a bit of</b>
				</h2>
				<div class="w-full  flex-wrap justify-center !mx-auto flex items-center gap-3 mt-8">
					<div class="p-2  dark:bg-base-200 bg-white shadow-2xl">
						<Icon name="c" color="#1c7ed6" height="68" width="58" />
					</div>

					<div class="p-2  dark:bg-base-200 bg-white shadow-2xl">
						<Icon name="python" color="#51cf66" height="68" width="58" />
					</div>
					<div class="p-2  dark:bg-base-200 bg-white shadow-2xl">
						<Icon name="vuedotjs" color="#51cf66" height="68" width="58" />
					</div>
				</div> -->
						</div>
					</div>
				</section>
			</div>
		</div>
	</section>
</div>
<style>
		.card-wrapper{
		box-shadow: 4px 4px black;
		
	}
	.card-wrapper:hover{
		box-shadow: -4px -4px black;
	}
</style>