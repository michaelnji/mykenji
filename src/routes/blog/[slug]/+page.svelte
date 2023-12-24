<script lang="ts">
	import BlogAuthorInfo from '$lib/components/misc/blogAuthorInfo.svelte';
	import BlogImg from '$lib/components/misc/blogImg.svelte';
	import CodeBloack from '$lib/components/misc/codeBloack.svelte';
	import ColorBlock from '$lib/components/misc/colorBlock.svelte';
	import CustomHeading from '$lib/components/misc/customHeading.svelte';
	import Gotcha from '$lib/components/misc/gotcha.svelte';
	import Hint from '$lib/components/misc/hint.svelte';
	import InlineCodeBlock from '$lib/components/misc/inlineCodeBlock.svelte';
	import Quote from '$lib/components/misc/quote.svelte';
	import RelatedPosts from '$lib/components/misc/relatedPosts.svelte';
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


	<section class="px-6 md:px-0 max-w-3xl mx-auto ">
		<div class="w-full">
			<img src={data.post.imageUrl} alt="" class="  border-2 border-black custom-img w-full " />

			<h1 class="mt-6 text-4xl w-full md:text-6xl font-bold  ">
				{data.post.title}
			</h1>
			<div class="mt-6 flex flex-wrap gap-3 items-center w-full  ">
				{#each data.post.tags as tag}
					<span
						class="px-3 py-1 hover:bg-opacity-100 hover:text-indigo-50 dark:hover:text-primary dark:hover:bg-indigo-200 font-bold bg-primary bg-opacity-10 text-primary dark:text-indigo-200 text-sm md:text-base font-mono transition duration-150 uppercase"
					>
						{tag.title}
					</span>
				{/each}
			</div>
			<p class="font-medium opacity-80 mt-4 text-lg">
				<span class="text-gray-700 font-serif dark:text-gray-200 font-bold"
					>{data.post._updatedAt
						? `Last updated on ${getReadableDate(data.post._updatedAt)}`
						: `Published on ${getReadableDate(data.post.publishedAt)}`}</span
				>
			</p>
			<!-- <div class="mt-6 flex flex-wrap gap-3 items-center ">
				<img
					src={data.post.authorInfo.imageUrl}
					alt=""
					class="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-700"
				/>
				<p class="font-medium font-serif">By {data.post.authorInfo.name}</p>
			</div> -->
		</div>
		<aside class=" w-full max-w-xl mb-10 mt-3">
		<div class="hidden lg:block w-full "><Toc outline={data.toc} /></div>
	</aside>
		<section
			class="!min-w-full prose-p:!min-w-full   mt-10 prose md:!prose-xl  dark:prose-invert prose-headings:font-sans prose-headings:font-semibold  prose-pre:!p-0 prose-pre:!rounded-none prose-pre:whitespace-pre-wrap prose-pre:border-2 prose-pre:border-black prose-indigo font-serif border-b-2 dark:border-gray-700 pb-10"
		>
			<PortableText
				value={[...data.post.body]}
				components={{
					types: {
						code: CodeBloack,
						image: BlogImg,
						img: BlogImg,
						
					},
					marks:{
						color: ColorBlock,
						code: InlineCodeBlock
					},

					block: {
						// Re-using the same component across multiple styles
						h1: CustomHeading,
						h2: CustomHeading,
						h3: CustomHeading,
						h4: CustomHeading,
						h5: CustomHeading,
						h6: CustomHeading,
						blockquote: Quote,
						hint: Hint,
						gotcha: Gotcha,
					}
				}}
			/>
		</section>
		<aside class="mt-8">
			<BlogAuthorInfo author={data.post.authorInfo} />
		</aside>
	</section>
	<div class="mt-24 px-6 md:px-0">
		<RelatedPosts posts={data.relatedPosts}/>
	</div>
	<Footer/>

<style>
	.custom-img {
		box-shadow: 4px 4px black;
	}
</style>
