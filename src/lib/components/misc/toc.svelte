
<script>
/**
	 * @type {any}
	 */
 export let outline
 import currentItem from "$lib/stores/toc-store";
</script>

<div class="p-6  bg-gray-100 border-opacity-30  w-full border-gray-900 max-h-[35rem] overflow-y-scroll rounded-2xl   dark:bg-base-300">
    <h3 class="mb-6 font-semibold text-2xl">On this page</h3>
    <ul class="flex flex-col  list-outside list-none gap-y-3">
       {#key $currentItem }
         {#each outline as heading }
        <a href={'#' + heading.slug} class=" no-underline " >
         <li class="bg-gray-800 rounded-lg py-1 px-2 bg-opacity-0 hover:bg-opacity-10 dark:hover:bg-opacity-40 text-2xl"
         class:!bg-opacity-100={$currentItem === heading.slug}
         class:!bg-primary={$currentItem === heading.slug}
         class:!text-white={$currentItem === heading.slug}
         >
       {heading.text}
       
    </li>
</a>
    {/each}
       {/key}
    </ul>
   </div>