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
  let finalResults = $state([]);
  let dialog;

  // ==================================================
  // Filter answers for each question
  // ==================================================
  function AnswersForQuestion(questionId) {
    return data.answers.filter(answer => answer.question_id === questionId);
  }

  // ==================================================
  // Fetch selected answers
  // ==================================================
  function SelectedFormAnswers(event) {
    const formData = new FormData(event.target);
    const selectedAnswers = Array.from(formData.entries());
    const selectedResults = [];

    for (let i = 0; i < selectedAnswers.length; i += 2) {
      const [questionName, questionId] = selectedAnswers[i];
      const [answerName, answerScore] = selectedAnswers[i + 1];

      selectedResults.push({
        id: parseInt(questionId),
        question: questionName,
        answer: answerName,
        score: parseInt(answerScore)
      });
    }

    return selectedResults;
  }

  // ==================================================
  // Calculate total score of selected answers
  // ==================================================
  function CalculateScore(answersToCalculate) {
    const totalScore = answersToCalculate.reduce((total, current) => total + current.score, 0);
    return totalScore;
  }

  // ==================================================
  // POST request
  // ==================================================
  async function FormPOST(selectedAnswerArray, answerTotalScore) {
    try {
      const response = await fetch('/wizard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers: selectedAnswerArray, answerTotalScore })
    });
    
    return response;
    } catch (error) {
      console.log(error);
    }
  }

  function POSTHandler (event) {
    const selectedAnswers = SelectedFormAnswers(event);
    const totalScore = CalculateScore(selectedAnswers);

    finalResults = selectedAnswers;

    return FormPOST(selectedAnswers, totalScore);
  }

  // ==================================================
  // Form submit handler
  // ==================================================
  async function handleSubmit(event) {
    const request = await POSTHandler(event);

    if (request) {
      // toon success alert
    } else {
      // toon error alert
    }
    dialog.showModal();
    event.preventDefault();
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
  <p class="alert success">Data successfully submited!</p>
  <p class="alert error">Something went wrong!</p>
  <dialog bind:this={dialog}>
    <ul>
      {#each finalResults as result}
      <li>
        <h3>{result.question}</h3>
        <p><span>Answer:</span> {result.answer}</p>
      </li>
      {/each}
    </ul>
    <form method="dialog">
      <button>Close</button>
    </form>
  </dialog>

  <form onsubmit={handleSubmit}>
    {#each data.questions as question}
    <Question question={question.question} id={question.id}>
      {#each AnswersForQuestion(question.id) as answer, index}
        <Answer
          number={index + 1}
          id={answer.id}
          answer={answer.answer}
          score={answer.score}
          name={answer.answer} />
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

  .alert {
    position: absolute;
    top: 2rem;
    right: 0;
    width: 15rem;
    padding: 1rem;
    font-weight: 600;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    overflow: hidden;
  }

  .error {
    background-color: rgb(226, 159, 159);
    color: rgb(94, 37, 37);
  }

  .success {
    background-color: rgb(152, 236, 152);
    color: rgb(30, 81, 30);
  }

  dialog {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--background);
    border-radius: 1rem;
    padding: 1rem;
    border: none;
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: 1rem;
  }

  dialog ul {
    list-style-type: "";
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  dialog ul li {
    color: var(--text-tertiary);
  }

  dialog ul li h3, dialog ul li p span {
    color: var(--text-primary);
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


