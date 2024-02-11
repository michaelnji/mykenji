<script lang="ts">
	import { getReadableDate } from '$lib/utils/timeFunctions';

	export let title: string;
	export let tags: { title: string; description: string }[];
	export let slug: string;
	export let published: Date;
	export let excerpt: string;
	export let image: string;
</script>

<div class=" group w-full max-w-lg !rounded-2xl transition-shadow">
	<div class="  bg-white border-2 border-black card-wrapper dark:bg-gray-900 pt-6 !rounded-2xl">
		<div class="w-full flex-col !justify-between gap-12 items-start">
			<div class="px-6">
				<img
					src={image}
					alt=""
					class=" rounded-2xl group-hover:scale-105 transition w-full object-cover max-w-xl m-0"
				/>
			</div>

			<div class="flex flex-wrap mt-6 gap-3 justify-start items-start px-6">
				{#each tags as tag}
					<span
						class="  px-3 py-1 font-bold text-gray-700 rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-gray-200 font-mono transition text-base"
					>
						{tag.title}
					</span>
				{/each}
			</div>
		</div>
		<div class="mt-4">
			<h1
				class="px-6 text-2xl md:text-3xl text-gray-950 dark:text-gray-100 font-bold font-head m-0"
			>
				{title}
			</h1>

			<div class=" mb-4">
				<p class="px-6 text-gray-800 dark:text-gray-100 text-xl opacity-80 line-clamp-2 prose">
					{excerpt}
				</p>
				<div class="w-full h-0.5 bg-gray-600 bg-opacity-10 md:my-6 my-3" />
				<div class="mt-4 flex gap-3 justify-between items-center px-6 md:pb-3">
					<a
						href={`/blog/${slug}`}
						class="btn font-medium !bg-opacity-10 btn-primary dark:!text-purple-100 !text-primary !text-sm md:!text-base"
						>read more</a
					>
					<span class=" md:text-lg opacity-75">{getReadableDate(published)}</span>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.card-wrapper {
		box-shadow: 2px 2px black;
	}
	.card-wrapper:hover {
		box-shadow: 5px 5px black;
	}
</style>
