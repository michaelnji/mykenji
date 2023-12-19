
<script>
/**
	 * @type {any}
	 */
 export let outline
 import currentItem from "$lib/stores/toc-store";
</script>

<div class="p-6 border-2 w-full border-black max-h-[35rem] overflow-y-scroll   dark:bg-base-300">
    <h3 class="mb-6 font-extrabold font-head ">On This Page</h3>
    <ul class="flex flex-col  list-outside list-none gap-y-3">
       {#key $currentItem }
         {#each outline as heading }
        <a href={'#' + heading.slug} class=" no-underline text-sm transition duration-500" >
         <li class="bg-gray-800 rounded-lg py-1 px-2 bg-opacity-0 hover:bg-opacity-10"
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