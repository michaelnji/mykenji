import { getPostsSummarized } from '$lib/backend/posts';
import { getTags } from '$lib/backend/tags'
import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ url, params, fetch, }) => {
 
  const res = await getPostsSummarized();
  const tagRes = await getTags()
  if (res && tagRes) {
    return {
      posts: res.posts,
      tags: tagRes.tags
    };
  }

  return {
    status: 500,
    error: new Error(`Could not load url`)
  };
}