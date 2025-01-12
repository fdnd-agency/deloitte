<script>
  // ==================================================
  // Imports
  // ==================================================
  import Section from '$lib/atom/component-section.svelte';
  import Question from '$lib/atom/component-question.svelte';
  import Answer from '$lib/atom/component-answer.svelte';
  import {Button,WinC} from '$lib';
  import { onMount } from 'svelte';
  import { setupFieldsets } from '$lib/fieldsetFilter.js';

  // ==================================================
  // Props
  // ==================================================
  /** @type {{data: any}} */
  let { data } = $props();

  // ==================================================
  // Filter functie voor vragen
  // ==================================================
  function AnswersForQuestion(questionId) {
    // Filter antwoorden op basis van hun question id
    return data.answers.filter(answer => answer.question_id === questionId);
  }

  // ==================================================
  // Submit functie voor formulier
  // ==================================================
  async function handleSubmit(event) {
    // ---------------------------------
    // Default formulier handling weghalen 
    // ---------------------------------
    event.preventDefault();

    // ---------------------------------
    // Alle geselecteerde antwoorden ophalen
    // ---------------------------------
    // Formulier gegevens ophalen
    const formData = new FormData(event.target);
    console.log(formData);
    // Entries: Een nieuwe array maken met alle props van elke answer
    // Map: foreach method, gaat door elke answer heen en neemt de props op
    const selectedAnswers = Array.from(formData.entries()).map(([questionId, score]) => ({
      questionId: parseInt(questionId),
      question: "question",
      answer: "answer",
      score: parseInt(score)
    }));

    // ---------------------------------
    // Totale score berekenen
    // ---------------------------------
    // Reduce: start waarde 0 en de score voor elke answer optellen tot het total score
    const totalScore = selectedAnswers.reduce((total, current) => total + current.score, 0);

    // ---------------------------------
    // Verzamel de data en stuur een POST-request
    // ---------------------------------
    const response = await fetch('/wizard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers: selectedAnswers, totalScore })
    });

    // ---------------------------------
    // Alert tonen na submit
    // ---------------------------------
    if (response.ok) {
      alert('Package successfully assigned!');
    } else {
      alert('Something went wrong!');
    }
  }

  // ==================================================
  // onMount
  // ==================================================
  onMount(() => {
    setupFieldsets();
  });
</script>

<Section
subtitle="Vragenlijst"
title="Mobiliteits Wizard"
body="Lees de vragen en antwoorden goed door en beantwoordt ze duidelijk om een goed passende mobiliteitspakket te krijgen.">
  <form onsubmit={handleSubmit}>
    {#each data.questions as question}
    <Question question={question.question} questionNumber={question.id}>
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
  {#if data.questions.length < 0}
    <p>not done</p>
    <WinC role="buttonBox" class="wizardSubmit">
      <Button sort="/" text="home" color='white' />
      <Button sort="" text="submit" color='red' />
    </WinC>
    {:else}
    <WinC role="buttonBox" class="wizardSubmit">
      <Button sort="/" text="home" color='white' />
      <Button sort="submit" text="submit" color='' />
    </WinC>
  {/if}

 </form>
</Section>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  :global(.buttonBox.wizardSubmit) {
    --cc-radius:1pc;
    --w:70;
    --p: calc(calc(100 - var(--w))/2);


    inset-inline: calc(var(--p) * 1%);

    display: flex;
    flex-direction: row !important;
    justify-content: center;
    gap: 1%;

    & button {
      width: 40%;
      font-size: 2rem;
      background-color:var(--D-t-support);
      color: white ;

      
    }

    & button:nth-of-type(1){
      background-color:var(--D-base-bk);
    }
  }
</style>


