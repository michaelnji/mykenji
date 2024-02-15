// import type { MetaTagsProps } from 'svelte-meta-tags';
export const load = ({ url }: any) => {
	const { pathname } = url;

	return {
		pathname
	};
};
