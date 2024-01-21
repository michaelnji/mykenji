<script lang="ts">
	import About from '$lib/components/section/about.svelte';
	import Blog from "$lib/components/section/blog.svelte";
	import Contact from '$lib/components/section/contact.svelte';
	import Footer from '$lib/components/section/footer.svelte';
	import Hero from '$lib/components/section/hero.svelte';
	import Projects from '$lib/components/section/projects.svelte';
	export let data;
	

	
</script>


	<Hero />

	<div class=" !mb-36 mt-12">
		<About />
	</div>
<div class="!mb-24 !mt-36">
	{#if data?.posts }
		<Blog posts={data.posts} />
	{/if}
</div>
<div class="my-24">
	<Projects />
</div>
<div class="my-24">
	<Contact />
</div>
<Footer />


