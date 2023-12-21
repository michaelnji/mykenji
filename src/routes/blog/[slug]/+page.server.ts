import { getPost, getRelatedPosts } from '$lib/backend/posts';
import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ url, params, fetch }) => {
	const res = await getPost(params.slug);
	const relatedPosts: any = await getRelatedPosts(params.slug)
	console.log(relatedPosts) 
	if (res?.post) {
		return {
			post: res.post[0],
			toc: res.toc,
			relatedPosts: relatedPosts.posts
		}
		
	}

	return {
		status: 500,
		error: new Error(`Could not load url`)
	};
};
