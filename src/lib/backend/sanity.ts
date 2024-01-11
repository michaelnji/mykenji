import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: '5xp71fus',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2023-12-13'
};
export const sanityClient = createClient(config);
