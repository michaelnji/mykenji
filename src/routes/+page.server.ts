import { getPostsSummarized } from '$lib/backend/posts';
import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ url, params, fetch }) => {
	const res = await getPostsSummarized();
	if (res.status === 200) {
		return {
			posts: res.posts
		};
	}

	return {
		status: 500,
		error: new Error(`Could not load url`)
	};
};
