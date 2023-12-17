<script lang="ts">
	import BlogImg from '$lib/components/misc/blogImg.svelte';
	import CodeBloack from '$lib/components/misc/codeBloack.svelte';
	import CustomHeading from '$lib/components/misc/customHeading.svelte';
	import { getReadableDate } from '$lib/utils/timeFunctions.js';
	import { PortableText } from '@portabletext/svelte';
  import dracula from "svelte-highlight/styles/dracula";

	export let data;
</script>
<svelte:head>
  {@html dracula}
</svelte:head>

	<section class="px-6 md:px-12 md:w-3/4 w-full ">
		<div class="w-full">
			<img
				src={data.imageUrl}
				alt=""
				class=" rounded-2xl border border-gray-200 dark:border-gray-700 w-full"
			/>
			<p class="font-bold mt-6 md:mt-14 md:mb-4 mb-2 text-lg">
				<span class="text-gray-700 dark:text-gray-200 "
					>{getReadableDate(data.publishedAt)}</span
				>
			</p>
			<h1
				class=" text-4xl w-full   md:text-6xl font-extrabold font-head "
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
		<section class="!w-full mt-10 prose md:prose-xl dark:prose-invert prose-headings:font-head prose-headings:font-extrabold prose-pre:p-0 prose-pre:rounded-2xl prose-pre:whitespace-pre-wrap  prose-indigo">
		<PortableText
  value={[
    ...data.body
  ]}
   components={{
     types: {
    code: CodeBloack,
	image: BlogImg,
	img: BlogImg,
},
  
    block: {
      // Re-using the same component across multiple styles
      h1: CustomHeading,
      h2: CustomHeading,
      h3: CustomHeading,
      h4: CustomHeading,
      h5: CustomHeading,
      h6: CustomHeading,
	 
	  
    
    },
    
  }}
/>
		</section>
	</section>

<!-- TODO: Install tailwind prose -->
<!-- TODO: write custom components for portable text -->

