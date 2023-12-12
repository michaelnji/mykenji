<script>
	import BlogCard from "./../display/blogCard.svelte";
	import { Icon } from 'svelte-simples';
</script>
<section class='py-12 lg:py-24 w-full'>

	<h1 class="text-3xl w-full max-w-6xl mx-auto md:text-4xl font-extrabold font-head text-center">My Blog</h1>

<div class="mt-6 p-6 flex flex-wrap justify-center items-center gap-6  w-full ">
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
   
</div>
</section>