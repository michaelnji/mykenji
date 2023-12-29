<script lang=ts>
	import { Icon } from "svelte-simples";
    export let author : any; 
</script>

 
    <div class=" max-w-sm  p-5 w-full">
    <div class=" flex flex-col gap-3 ">
			<div class="flex flex-row gap-3 items-center">
                	<img
					src={author.imageUrl}
					alt={author.name}
					class="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-700"
				/>
				<div>
                    <p class="font-semibold flex gap-x-2"> {author.name} <span
						class="px-1 py-0.5 flex items-center font-bold bg-primary bg-opacity-10 text-primary dark:text-indigo-200 text-xs transition duration-150"
					>
						Author
					</span></p>
                    <a href={author.twitter} target="_blank"><p class="font-medium  flex gap-2 opacity-70 group"> <Icon name='twitter' class='group-hover:text-blue-500 transition-colors'/>@cod3v1l</p></a>
                </div>
            </div>
                <p class="mt-2 prose text-opacity-75 dark:prose-invert">
                    {author.bio[0].children[0].text}
                </p>
			</div>
            
        </div>
      
