<script lang="ts">
	import { getReadableDate } from '$lib/utils/timeFunctions';

	export let imgUrl: string;
	export let title: string;
	export let tags: { title: string; description: string }[];
	export let slug: string;
	export let published: Date;
	export let excerpt: string;
</script>

<div
	class="rounded-2xl w-full max-w-md grid grid-cols-1 gap-y-3 md:gap-x-3 md:gap-y-0 border border-gray-200 dark:border-gray-700 group shadow-lg duration-700"
>
	<div class="rounded-t-2xl overflow-hidden">
		<img
			src={imgUrl}
			alt="main illustration"
			class="group-hover:scale-110 transition-transform duration-1000 max-h-[15rem]"
		/>
	</div>
	<div class="p-6 relative border-t border-primary dark:border-indigo-200">
		<div
			class=" max-w-max py-1 px-2 rounded font-bold bg-primary dark:bg-indigo-200 dark:text-primary text-white text-xs absolute -top-4 font-mono"
		>
			{getReadableDate(published)}
		</div>
		<h1 class="text-xl mt-2 capitalize md:text-2 font-extrabold font-head">
            {title}
		</h1>
        <div class="mt-3 flex flex-wrap gap-2">
            {#each tags as tag}
                <a href={`/blog/tags/${tag.title}`}>
                    <span
                        class="px-3 py-1 rounded-2xl font-bold bg-primary bg-opacity-10 text-primary dark:text-indigo-200 text-sm font-mono transition duration-1000"
                    >
                        <span class=" opacity-0 group-hover:opacity-80 transition-opacity duration-700">#</span
                        >{tag.title}
                    </span>
                </a>
            {/each}
        </div>
		<p class="mt-6 text-md opacity-75 font-medium line-clamp-3">
			{excerpt}
		</p>
		<div class="mt-2 mb-6">
			<a
				href={`/blog/${slug}`}
				class="font-extrabold transition dark:text-indigo-200 text-primary border-b-2 border-transparent hover:border-primary dark:hover:border-indigo-200"
				>Read more >>
			</a>
		</div>
		
	</div>
</div>
