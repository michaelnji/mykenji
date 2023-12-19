<script lang="ts">
	import BlogImg from '$lib/components/misc/blogImg.svelte';
	import CodeBloack from '$lib/components/misc/codeBloack.svelte';
	import CustomHeading from '$lib/components/misc/customHeading.svelte';
	import Toc from '$lib/components/misc/toc.svelte';
	import Footer from '$lib/components/section/footer.svelte';
	import { getReadableDate } from '$lib/utils/timeFunctions.js';
	import { PortableText } from '@portabletext/svelte';
	import dracula from 'svelte-highlight/styles/dracula';

	export let data;
	// <!-- console.log(data.post.toc) -->
</script>

<svelte:head>
	{@html dracula}
</svelte:head>


	<section class="px-6 md:px-12 max-w-5xl w-full mx-auto ">
		<div class="w-full">
			<img src={data.post.imageUrl} alt="" class="  border-2 border-black custom-img w-full" />

			<h1 class="mt-6 text-4xl w-full md:text-6xl font-bold text-center ">
				{data.post.title}
			</h1>
			<div class="mt-6 flex flex-wrap gap-3 items-center w-full justify-center ">
				{#each data.post.tags as tag}
					<span
						class="px-3 py-1 hover:bg-opacity-100 hover:text-indigo-200 dark:hover:text-primary dark:hover:bg-indigo-200 font-bold bg-primary bg-opacity-10 text-primary dark:text-indigo-200 text-sm md:text-base font-mono transition duration-150 uppercase"
					>
						{tag.title}
					</span>
				{/each}
			</div>
			<p class="font-medium opacity-80 mt-4 text-lg mx-auto w-max">
				<span class="text-gray-700 font-serif dark:text-gray-200"
					>{data.post._updatedAt
						? `Updated on ${getReadableDate(data.post._updatedAt)}`
						: `published on ${getReadableDate(data.post.publishedAt)}`}</span
				>
			</p>
			<div class="mt-6 flex flex-wrap gap-3 items-center mx-auto w-max">
				<img
					src={data.post.authorInfo.imageUrl}
					alt=""
					class="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-700"
				/>
				<p class="font-medium font-serif">By {data.post.authorInfo.name}</p>
			</div>
		</div>
		<aside class=" w-full max-w-xl my-10 mx-auto">
		<div class="hidden lg:block w-full "><Toc outline={data.toc} /></div>
	</aside>
		<section
			class="!w-max mx-auto mt-10 prose md:prose-xl  px-3 dark:prose-invert prose-headings:font-sans prose-headings:font-semibold  prose-pre:p-0 prose-pre:rounded-none prose-pre:whitespace-pre-wrap prose-pre:border-2 prose-pre:border-black prose-indigo font-serif"
		>
			<PortableText
				value={[...data.post.body]}
				components={{
					types: {
						code: CodeBloack,
						image: BlogImg,
						img: BlogImg
					},

					block: {
						// Re-using the same component across multiple styles
						h1: CustomHeading,
						h2: CustomHeading,
						h3: CustomHeading,
						h4: CustomHeading,
						h5: CustomHeading,
						h6: CustomHeading
					}
				}}
			/>
		</section>
	</section>
	<Footer/>

<style>
	.custom-img {
		box-shadow: 4px 4px black;
	}
</style>
