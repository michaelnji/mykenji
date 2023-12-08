<script lang="ts">
	import About from '$lib/components/section/about.svelte';
	import Footer from '$lib/components/section/footer.svelte';
	import Hero from '$lib/components/section/hero.svelte';
	import Projects from '$lib/components/section/projects.svelte';
	import Contact from '$lib/components/section/contact.svelte';
</script>

<div class="mb-24">
<Hero />
</div>
	<div class="mb-24 mt-32">
		<About />
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
