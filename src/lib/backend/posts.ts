import { findHeadings } from "$lib/utils";
import { queries } from "$lib/utils/queryManager";
import { sanityClient } from "./sanity";


export async function getPostsSummarized() {
    const query = queries.postsSummary;
   try {
	 const data = await sanityClient.fetch(query);
		if (data) {
			return {
				
				posts: data
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
export async function getRelatedPosts(slug:string|undefined ) {
    const query = `*[_type == "post" && slug.current != "${slug}"] | order(publishedAt desc, _updatedAt desc) | order( _updatedAt desc)[0..1]{_id, "authorInfo":author-> {slug,name,bio,twitter,"imageUrl":image.asset->url}, "tags":categories[]->{title,description},excerpt, publishedAt, slug, title, _updatedAt,"imageUrl": mainImage.asset->url}`;
   try {
	 const data = await sanityClient.fetch(query);
		if (data) {
			return {
				
				posts: data
			};
		}
		return {
			status: 500,
			body: new Error('Internal Server error')
		};
   } catch (error) {
	return {
			status: 500,
			body: new Error('Internal Server error')
		}
   }
}
export async function getPost(slug:string|undefined ) {
    const query = `*[_type == "post" && slug.current == "${slug}"]{_id,body, "authorInfo":author-> {slug,name,bio,twitter,"imageUrl":image.asset->url}, "tags":categories[]->{title,description}, publishedAt, slug, title, _updatedAt,"imageUrl": mainImage.asset->url, "tableOfContents": content[style in ["h2", "h3"]]}`;
   try {
	 const data = await sanityClient.fetch(query);
	 const toc = findHeadings(data[0].body);
		if (data && toc) {
			return {
				toc,
				post: data
			};
		}
		return {
			status: 500,
			body: new Error('Internal Server error')
		};
   } catch (error) {
	return {
			status: 500,
			body: new Error('Internal Server error')
		}
   }
}