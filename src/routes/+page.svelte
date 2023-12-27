<script lang="ts">
	import Blog from "$lib/components/section/blog.svelte";
	import About from '$lib/components/section/about.svelte';
	import Footer from '$lib/components/section/footer.svelte';
	import Hero from '$lib/components/section/hero.svelte';
	import Projects from '$lib/components/section/projects.svelte';
	import Contact from '$lib/components/section/contact.svelte';
	import { onMount } from 'svelte';
	export let data;
	
		
	
</script>


<Hero />

	<div class="!mb-24 mt-12">
		<About />
	</div>
<div class="!my-24">
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

<style>
</style>
