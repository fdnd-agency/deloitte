import fetchJson from "$lib/fetch-json"

export async function load() {
  const API = 'https://fdnd-agency.directus.app/items/'
  const items = await fetchJson(API + 'deloitte_packages')
 
  return {
    items: items.data
  }
}