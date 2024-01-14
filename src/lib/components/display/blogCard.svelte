<script lang="ts">
	import { getReadableDate } from '$lib/utils/timeFunctions';

	export let title: string;
	export let tags: { title: string; description: string }[];
	export let slug: string;
	export let published: Date;
	export let excerpt: string;
</script>

<div
	class=" w-full rounded-3xl max-w-2xl  border-2 border-black  group card-wrapper duration-500 ease-out dark:bg-gray-900"
>
	
	<div class="p-6">
		<div
			class=" max-w-max  font-medium opacity-70 text-lg"
		>
			{getReadableDate(published)}
		</div>
		<h1 class="text-2xl lg:text-3xl  capitalize font-medium font-head leading-tight">
            {title}
		</h1>
        <div class="flex flex-wrap gap-2">
            {#each tags as tag}
                <a href={`/blog/tags/${tag.title}`}>
                    <span
                        class="px-3 py-1   font-bold bg-indigo-200 rounded-lg text-primary text-sm font-mono transition duration-1000"
                    >
                        <span class=" opacity-0 font-light group-hover:opacity-80 transition-opacity duration-700">#</span
                        >{tag.title}
                    </span>
                </a>
            {/each}
        </div>
		<p class="text-xl opacity-75 font-medium line-clamp-2">
			{excerpt}
		</p>
		<div>
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