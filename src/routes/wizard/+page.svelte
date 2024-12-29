<script>
  import Section from '$lib/atom/component-section.svelte';
  import Question from '$lib/atom/component-question.svelte';
  import Answer from '$lib/atom/component-answer.svelte';
  import Button from '$lib/component-button.svelte';
  import { onMount } from 'svelte';
  import { setupFieldsets } from '$lib/fieldsetFilter.js';
  /** @type {{data: any}} */
  let { data } = $props();

  function AnswersForQuestion(questionId) {
    return data.answers.filter(answer => answer.question_id === questionId);
  }

  onMount(() => {
    setupFieldsets();
  });
</script>

<Section
subtitle="Vragenlijst"
title="Mobiliteits Wizard"
body="Lees de vragen en antwoorden goed door en beantwoordt ze duidelijk om een goed passende mobiliteitspakket te krijgen.">
  <form>
    {#each data.questions as question}
    <Question question={question.question}>
      {#each AnswersForQuestion(question.id) as answer, index}
        <Answer
          number={index + 1}
          id={answer.id}
          answer={answer.answer}
          score={answer.score}
          name={question.id} />
      {/each}
    </Question>
  {/each}
  <Button type="submit" text="submit"/>
  </form>
</Section>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
</style>