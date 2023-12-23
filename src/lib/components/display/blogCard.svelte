<script lang="ts">
	import { getReadableDate } from '$lib/utils/timeFunctions';

	export let title: string;
	export let tags: { title: string; description: string }[];
	export let slug: string;
	export let published: Date;
	export let excerpt: string;
</script>

<div
	class=" w-full max-w-2xl grid grid-cols-1 gap-y-3 md:gap-x-3 md:gap-y-0 border-2 border-black  group card-wrapper duration-500 ease-out"
>
	
	<div class="p-6">
		<div
			class=" max-w-max  font-medium opacity-70"
		>
			{getReadableDate(published)}
		</div>
		<h1 class="text-xl  capitalize md:text-2xl font-extrabold font-head">
            {title}
		</h1>
        <div class="mt-1 flex flex-wrap gap-2">
            {#each tags as tag}
                <a href={`/blog/tags/${tag.title}`}>
                    <span
                        class="px-3 py-1   font-bold bg-primary bg-opacity-10 text-primary dark:text-indigo-200 text-sm font-mono transition duration-1000"
                    >
                        <span class=" opacity-0 group-hover:opacity-80 transition-opacity duration-700">#</span
                        >{tag.title}
                    </span>
                </a>
            {/each}
        </div>
		<p class="mt-6 text-md opacity-75 font-medium line-clamp-2">
			{excerpt}
		</p>
		<div class="mt-2">
			<a
				href={`/blog/${slug}`}
				class="font-semibold transition dark:text-indigo-200 text-primary border-b-2 border-transparent hover:border-primary dark:hover:border-indigo-200"
				>Read more 
			</a>
		</div>
		
	</div>
</div>

<style>
	.card-wrapper{
		box-shadow: 4px 4px black;
		
	}
	.card-wrapper:hover{
		box-shadow: -4px -4px black;
	}
</style>