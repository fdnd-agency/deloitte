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
    <div class="wizard-progress">
      <p>Wizard Progress</p>
      <div class="container" aria-label="progress-container">
        <div class="value" aria-label="progress-value"></div>
      </div>
    </div>
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

  .wizard-progress {
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 75vw;
    z-index: 10;
    background-color: var(--background);
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 0.1rem solid var(--border);
    opacity: 0;
    animation: progressShow linear forwards;
    animation-timeline: scroll(root);
  }

  p {
    color: var(--text-tertiary);
  }

  .container {
    width: 100%;
    height: 1rem;
    background-color: var(--background);
    border: 0.1rem solid var(--border);
    border-radius: 1rem;
    overflow: hidden;
  }

  .value {
    width: 0;
    height: 100%;
    background-image: linear-gradient(90deg, var(--background-dark), var(--background-light));
    animation: progressbar linear forwards;
    animation-timeline: scroll(root);
  }

  @keyframes progressbar {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes progressShow {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
</style>


