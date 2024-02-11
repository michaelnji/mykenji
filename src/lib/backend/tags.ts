import type { TagResponse } from '$lib/types';
import { queries } from '$lib/utils/queryManager';
import { sanityClient } from './sanity';

export async function getTags(): Promise<TagResponse> {
	const query = queries.tags;
	try {
		const data = await sanityClient.fetch(query);

		if (data) {
			return {
				status: 200,
				message: 'succes',
				tags: data
			};
		}
		return {
			status: 500,
			message: new Error('Internal Server Error'),
			tags: undefined
		};
	} catch (error) {
		return {
			status: 500,
			message: new Error('Internal Server Error'),
			tags: undefined
		};
	}
}
