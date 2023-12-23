import { queries } from "$lib/utils/queryManager";
import { sanityClient } from "./sanity";


export async function getTags() {
    const query = queries.tags;
   try {
	 const data = await sanityClient.fetch(query);
     
		if (data) {
			return {
				
				tags: data
			};
		}
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
   } catch (error) {
	return {
			status: 500,
			body: new Error('Internal Server Error')
		}
   }
}
