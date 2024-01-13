<script lang=ts>
	import { getReadableDate } from "$lib/utils/timeFunctions";

     export let posts:any
</script>
<h1 class="mb-12 text-3xl text-center w-full md:text-4xl font-semibold  ">
				More Articles
			</h1>
<div class="flex flex-wrap w-full gap-6 items-center justify-center">
    {#each posts as post }
        <div
	class=" w-full max-w-2xl grid grid-cols-1 gap-y-3 md:gap-x-3 md:gap-y-0 border-2 border-black rounded-3xl  group card-wrapper duration-500 ease-out"
>
	<div class=" overflow-hidden">
		
	</div>
	<div class="p-6">
		<h1 class="text-2xl  capitalize font-medium font-head">
            {post.title}
		</h1>
        <div class="mt-3 flex flex-wrap gap-2">
            {#each post.tags as tag}
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
		<p class="mt-6 text-xl opacity-75 font-medium line-clamp-2">
			{post.excerpt}
		</p>
		<div class="mt-2">
			<a
				href={`/blog/${post.slug.current}`}
				class="font-semibold text-lg transition dark:text-indigo-200 text-primary border-b-2 border-transparent hover:border-primary dark:hover:border-indigo-200"
				>Read more 
			</a>
		</div>
		
	</div>
</div>

    {/each}
</div>

<style>
	.card-wrapper{
		box-shadow: 4px 4px black;
		
	}
	.card-wrapper:hover{
		box-shadow: -4px -4px black;
	}
</style>