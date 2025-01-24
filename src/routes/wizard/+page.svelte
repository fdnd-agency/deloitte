<script>
  // ==================================================
  // Imports
  // ==================================================
  // import Section from '$lib/atom/Section.svelte';
  import {Button, WinC, Answer, Question, Section, Line} from '$lib';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { setupFieldsets } from '$lib/fieldsetFilter.js';
	import fetchJson from '$lib/fetch-json';

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
    const selectedAnswers = [...formData.entries()];

    const selectedResults = selectedAnswers.filter((_, index) => index % 2 === 0).map((question, index) => {
      const [questionName, questionId] = question;
      const [answerName, answerScore] = selectedAnswers[index * 2 + 1];

      return {
        id: parseInt(questionId),
        question: questionName,
        answer: answerName,
        score: parseInt(answerScore)
      };
  });

  return selectedResults;
  }

  // ==================================================
  // Calculate total score of selected answers
  // ==================================================
  function CalculateScore(answersToCalculate) {
    return answersToCalculate.reduce((total, current) => total + current.score, 0);
  }

  // ==================================================
  // Form submit handler
  // ==================================================
  async function handleSubmit(event) {
    const selectedAnswers = SelectedFormAnswers(event);
    const totalScore = CalculateScore(selectedAnswers);
    finalResults = selectedAnswers;

    const response = await fetch('/wizard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: selectedAnswers, totalScore })
    });

    if (response.ok) {
      // show succcess alert
      const alertSuccess = document.querySelector(".success");
      alertSuccess?.classList.add("alert-animation");
      console.log("class added");
      setTimeout(() => {
        alertSuccess?.classList.remove("alert-animation");
        console.log("class removed");
      }, 5000);

      // setTimeout(() => {
      //   dialog.showModal();
      // }, 2000);
    } else {
      // show error alert
      const alertError = document.querySelector(".error");
      alertError?.classList.add("alert-animation");
      setTimeout(() => {
        alertError?.classList.remove("alert-animation");
      }, 5000);
    }
    event.preventDefault();
  }

  // ==================================================
  // onMount
  // ==================================================
  onMount(() => {
    setupFieldsets();
  });

  const goSomeWhereBack = () => {
    goto($page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')));
}
</script>

<Section
subtitle="Vragenlijst"
title="Mobiliteits Wizard"
body="Lees de vragen en antwoorden goed door en beantwoordt ze duidelijk om een goed passende mobiliteitspakket te krijgen."
>

<Line/>

  <p class="alert success" aria-hidden="true">Data successfully submited!</p>
  <p class="alert error" aria-hidden="true">Something went wrong!</p>
  <!-- <dialog bind:this={dialog}>
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
  </dialog> -->

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
      <Button sort="/" text="home" color='white' clickCallback={goSomeWhereBack} />
      <Button sort="submit" text="submit" />
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
    opacity: 0;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 15rem;
    padding: 1rem;
    font-weight: 600;
    border-radius: 1rem;
    z-index: 999;
  }

  .alert-animation {
    animation: alertSlide 5s ease-in-out;
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

  @keyframes alertSlide {
    0% {
      /* top: -20rem; */
      transform: translateY(-10rem);
      opacity: 0;
    }
    25% {
      /* top: 0; */
      transform: translateY(0);
      opacity: 1;
    }
    75% {
      /* top: 0; */
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      /* top: -20rem; */
      transform: translateY(-10rem);
      opacity: 0;
    }
  }

  :global(.main-panel-wizard){
    border: none !important;

    & > h2{
      font-size: clamp(2rem, 0.917rem + 4.1478vw, 6cqi);
      height: fit-content;
      z-index: 1;
    }

    & h2 ~ p{
      margin-bottom: 3%;
    }

    & legend{
      /* outline: solid red !important; */
      padding-top: 3%;
    }

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


