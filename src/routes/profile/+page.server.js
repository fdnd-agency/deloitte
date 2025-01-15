//importeer het "fetch-json" bestand en geef het de naam fetchJson
import fetchJson from "$lib/fetch-json"

//een functie om data in te laden met async wacht je totdat the API request gedaan is
export async function load() {
  //een variable met een APi url voor person met id 56
  const url = 'https://fdnd.directus.app/items/person/9'
  //fetch de data uit de API url en sla het op in deze variable
  const person = await fetchJson(url)
  //return een object waarin person.data wordt meegegeven
  return {
    person: person.data
  }
}