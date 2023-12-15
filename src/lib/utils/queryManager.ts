export const queries = {
	post: `*[_type == "post"]{_id,excerpt, "authorInfo":author-> {slug,name,bio,image,twitter}, "tags":categories[]->{title,description}, publishedAt, slug, title, _updatedAt,"imageUrl": mainImage.asset->url},body`,
	authors: `*[_type == "author"]`,
    postsSummary: `*[_type == "post"]{_id,excerpt, "authorInfo":author-> {slug,name,bio,image}, "tags":categories[]->{title,description}, publishedAt, slug, title, _updatedAt,"imageUrl": mainImage.asset->url}`
};