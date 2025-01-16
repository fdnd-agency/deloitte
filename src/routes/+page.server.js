//importeer het "fetch-json" bestand en geef het de naam fetchJson
import fetchJson from "$lib/fetch-json"

//een functie om data in te laden met async wacht je totdat the API request gedaan is
export async function load({cookies}) {
  //een variable met een APi url voor person met id 56
  const questions_url = 'https://fdnd-agency.directus.app/items/deloitte_questions'
  const answers_url = 'https://fdnd-agency.directus.app/items/deloitte_answers'
  const packages_url = 'https://fdnd-agency.directus.app/items/deloitte_packages'
  //fetch de data uit de API url en sla het op in deze variable
  const questions = await fetchJson(questions_url)
  const answers = await fetchJson(answers_url)
  const packages = await fetchJson(packages_url)
  const userID = cookies.get('userID') || 0;

  //return een object waarin person.data wordt meegegeven
  return {
    questions: questions.data,
    answers: answers.data,
    packages: packages.data,
    userID: userID
  }
}