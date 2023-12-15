<script lang="ts">
	import CustomHeading from '$lib/components/misc/customHeading.svelte';
	import { getReadableDate } from '$lib/utils/timeFunctions.js';
	  import {PortableText} from '@portabletext/svelte'

	export let data;
</script>


	<section class="px-3 max-w-5xl w-full mx-auto ">
		<div class="">
			<img
				src={data.imageUrl}
				alt=""
				class=" rounded-2xl border border-gray-200 dark:border-gray-700"
			/>
			<p class="font-bold mt-14 mb-4 text-lg">
				<span class="text-gray-700 dark:text-gray-200 bg-gray-400 bg-opacity-10 py-2 px-4"
					>{getReadableDate(data.publishedAt)}</span
				>
			</p>
			<h1
				class=" text-3xl w-full   md:text-4xl font-extrabold font-head "
			>
				{data.title}
			</h1>
			<div class="mt-6 flex flex-wrap gap-3 items-center">
				{#each data.tags as tag}
					<span
						class="px-3 py-1 hover:bg-opacity-100 hover:text-indigo-200 dark:hover:text-primary dark:hover:bg-indigo-200 rounded-2xl font-bold bg-primary bg-opacity-10 text-primary dark:text-indigo-200 text-sm md:text-base font-mono transition duration-150 uppercase"
					>
						{tag.title}
					</span>
				{/each}
			</div>
			<div class="mt-6 flex flex-wrap gap-3 items-center">
				<img
					src={data.authorInfo.imageUrl}
					alt=""
					class="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-700"
				/>
				<p class="font-bold">By {data.authorInfo.name}</p>
			</div>
		</div>
		<section class="mt-10">
		<PortableText
  value={[
    ...data.body
  ]}
  
/>
		</section>
	</section>



