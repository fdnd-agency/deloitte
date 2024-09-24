import getDirectusInstance from "$lib/directus";
import { readItem } from "@directus/sdk";
export async function load({fetch}){
	const directus = getDirectusInstance(fetch);
	return {
		//this needs to be changed 
		// global: await directus.request(readItems('global')),
	}
}