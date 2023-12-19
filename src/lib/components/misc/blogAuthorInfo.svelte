<script lang=ts>
	import { Icon } from "svelte-simples";
    export let author : any; 
</script>

<div class="w-full flex items-center justify-center">
    <div class="w-full hidden md:inline-flex dark:border-gray-700  border-t-2 border-dashed"></div>
    <div class="border-dashed border-2 dark:border-gray-700  p-3 w-full md:w-[80rem]">
    <div class=" flex flex-wrap gap-3 items-center ">
				<img
					src={author.imageUrl}
					alt={author.name}
					class="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-700"
				/>
				<div>
                    <p class="font-semibold"> {author.name}</p>
                    <a href={author.twitter} target="_blank"><p class="font-medium font-serif flex gap-2 opacity-70"> <Icon name='twitter'/>@cod3v1l</p></a>
                </div>
                <p class="mt-2 prose text-opacity-75 dark:prose-invert">
                    {author.bio[0].children[0].text}
                </p>
			</div>
            
        </div>
        <div class="w-full hidden md:inline-flex  border-t-2 border-dashed dark:border-gray-700"></div>
</div>