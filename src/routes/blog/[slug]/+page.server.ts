import { getPost, getRelatedPosts } from '$lib/backend/posts';
import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ url, params, fetch }) => {
	const res = await getPost(params.slug);
	const relatedPostsRes = await getRelatedPosts(params.slug);

	if (res.status === 200 && relatedPostsRes.status === 200) {
		let post = res.post;
		return {
			post,
			toc: res.toc,
			relatedPosts: relatedPostsRes.posts
		};
	}

	return {
		status: 500,
		error: new Error(`Could not load url`)
	};
};
