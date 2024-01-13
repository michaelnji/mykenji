<script lang=ts>
	import { Icon } from "svelte-simples";
    export let author : any; 
</script>

 
    <div class=" max-w-lg border-2 border-black   w-full p-6 bg-primary rounded-3xl text-indigo-100">
    <div class=" flex flex-col gap-3 ">
			<div class="flex flex-row gap-3 items-center">
                	<img
					src={author.imageUrl}
					alt={author.name}
					class="w-14 h-14 rounded-full border-2 border-gray-700"
				/>
				<div>
                    <p class="font-semibold flex gap-x-2 text-xl"> {author.name} <span
						class="px-1 py-0.5 flex items-center font-bold bg-secondary rounded text-yellow-900 text-sm transition duration-150"
					>
						Author
					</span></p>
                    <a href={author.twitter} target="_blank"><p class="font-medium text-md flex gap-2 opacity-70 group font-mono"> <Icon name='twitter' width='20' height='20' class='group-hover:text-black transition-colors'/>@CodeD3vil</p></a>
                </div>
            </div>
                <p class="mt-2 prose font-mono   text-indigo-50 text-lg">
                    {author.bio[0].children[0].text}
                </p>
			</div>
            
        </div>
      
