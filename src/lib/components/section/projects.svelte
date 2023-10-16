<script lang="ts">
	import kawaiii from '$lib/images/kawaiii.vercel.app_(iPad).png';
	import byte from '$lib/images/bytepay.vercel.app_(iPad).png';
	import wabuzz from '$lib/images/wabuzz.png'
</script>

<div class="py-12 lg:py-24" id="projects">
	<section class=" px-6">
		<h1 class="text-3xl w-full max-w-6xl mx-auto md:text-4xl font-extrabold font-head text-center">
			Projects
		</h1>
		<p class="mt-6 max-w-3xl mx-auto text-center text-lg opacity-90">
			I have been working hard lately to build some pretty awesome stuff out here:
		</p>
	</section>

	<section class="pt-12 px-6">
		<div class="w-full max-w-4xl mx-auto grid grid-cols-1 gap-6">
			<div
				class="rounded-xl border border-gray-200 dark:border-base-200 p-4 grid lg:grid-cols-2 gap-3 bg-gray-100 dark:bg-transparent"
			>
				<img src={byte} class="rounded-md" alt="bytepay website screenshot" />
				<div class="bg-white dark:bg-base-200 p-4 rounded-lg">
					<div class="w-full flex items-center justify-between flex-wrap gap-2">
						<h1 class="text-2xl md:text-3xl font-extrabold">BytePay</h1>
						<div class="flex items-center gap-2">
							<span
								class="p-1 font-semibold border border-indigo-200 dark:border-indigo-700 text-primary rounded-lg text-sm"
							>
								#in-progress
							</span>
							<span
								class="p-1 font-semibold border border-red-200 dark:border-red-700 text-red-600 rounded-lg text-sm"
							>
								#private
							</span>
						</div>
					</div>
					<p class="mt-3 md:text-lg opacity-90">
						A financial system facilitating online payments in Cameroon
					</p>
					<h1 class="text-xl mt-8 font-extrabold">links</h1>
					<div class="mt-2 flex flex-wrap items-center gap-2 w-full">
						<a href="https://bytepay.vercel.app" class="underline" target="_blank">Preview</a>
					</div>
				</div>
			</div>
			<div
				class="rounded-xl border border-gray-200 dark:border-base-200 p-4 grid lg:grid-cols-2 gap-3 bg-gray-100 dark:bg-transparent"
			>
				<img src={kawaiii} class="rounded-md" alt="kawaiii website screenshot" />
				<div class="bg-white dark:bg-base-200 p-4 rounded-lg">
					<div class="w-full flex items-center justify-between flex-wrap gap-2">
						<h1 class="text-2xl md:text-3xl font-extrabold">Kawaiii</h1>
						<div class="flex items-center gap-2">
							<span
								class="p-1 font-semibold border border-indigo-200 dark:border-indigo-700 text-primary rounded-lg text-sm"
							>
								#completed
							</span>
							<span
								class="p-1 font-semibold border border-green-200 dark:border-green-700 text-green-600 rounded-lg text-sm"
							>
								#open-source
							</span>
						</div>
					</div>
					<p class="mt-3 md:text-lg opacity-90">
						A side project to display female anime/manga characters
					</p>
					<h1 class="text-xl mt-8 font-extrabold">links</h1>
					<div class="mt-2 flex flex-wrap items-center gap-2 w-full">
						<a href="https://github.com/michaelnji/kawaiii" class="underline" target="_blank">Github</a>
						<a href="https://kawaiii.vercel.app" target="_blank" class="underline">Preview</a>
					</div>
				</div>
			</div>
			<div
				class="rounded-xl border border-gray-200 dark:border-base-200 p-4 grid lg:grid-cols-2 gap-3 bg-gray-100 dark:bg-transparent"
			>
				<img src={wabuzz} class="rounded-md" alt="wabuzz website screenshot" />
				<div class="bg-white dark:bg-base-200 p-4 rounded-lg">
					<div class="w-full flex items-center justify-between flex-wrap gap-2">
						<h1 class="text-2xl md:text-3xl font-extrabold">Wabuzz</h1>
						<div class="flex items-center gap-2">
							<span
								class="p-1 font-semibold border border-indigo-200 dark:border-indigo-700 text-primary rounded-lg text-sm"
							>
								#completed
							</span>
							<span
								class="p-1 font-semibold border border-green-200 dark:border-green-700 text-green-600 rounded-lg text-sm"
							>
								#open-source
							</span>
						</div>
					</div>
					<p class="mt-3 md:text-lg opacity-90">
						A website to grow your whatsapp views/audience
					</p>
					<h1 class="text-xl mt-8 font-extrabold">links</h1>
					<div class="mt-2 flex flex-wrap items-center gap-2 w-full">
						<a href="https://github.com/michaelnji/wabuzz" class="underline" target="_blank">Github</a>
						<a href="https://wabuzz.vercel.app" target="_blank"  class="underline">Preview</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
