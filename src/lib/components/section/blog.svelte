<script lang='ts'>
	import BlogCard from "./../display/blogCard.svelte";
    export let posts: any[]   
</script>
<section class='py-12 xl:py-24 w-full'>

	<h1 class="text-3xl w-full max-w-6xl mx-auto md:text-4xl font-bold font-head text-center">Article Garden🌿</h1>

<div class="prose-base mt-6 p-6 flex flex-wrap justify-center items-center gap-6  w-full ">
   {#each posts as post,i }
   {#if i <=3 }
     <BlogCard title={post.title} tags={post.tags} slug={post.slug.current} published={post.publishedAt} excerpt={post.excerpt}/>
   {/if}
   {/each}
</div>
<a href="/blog"
     class="btn rounded-2xl md:btn-lg btn-primary overflow-hidden ! border border-black card-wrapper w-[90%] max-w-sm mx-auto flex justify-center font-medium mt-12"
     
 >View All</a>
</section>
<style>
    .card-wrapper {
		box-shadow: 4px 4px black;
	}
	.card-wrapper:hover {
		box-shadow: -4px -4px black;
	}
</style>
