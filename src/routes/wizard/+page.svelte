<script>
  import Checkbox from '$lib/checkbox.svelte';
  
  export let data;

  let currentQuestionIndex = 0; // Huidige vraagnummer
  let selectedAnswer = null; // Geselecteerde antwoord
  let totalScore = 0; // Totale score
  let userAnswers = []; // Gebruiker antwoorden array
  let selectedPackage = null; // Geselecteerde pakket

  // Functie om het juiste pakket te selecteren op basis van de totale score
  function determinePackage() {
    selectedPackage = data.packages.find(pkg => 
      totalScore >= pkg.min_score && totalScore <= pkg.max_score
    );
  }

  // Functie om naar de volgende vraag te gaan
  function nextQuestion(event) {
    event.preventDefault();

    if (selectedAnswer !== null) {
      // Voeg de geselecteerde score toe aan de totale score
      totalScore += parseInt(selectedAnswer);

      // Sla het huidige antwoord op in de juiste structuur
      userAnswers.push({
        question: data.questions[currentQuestionIndex].id,
        answer: selectedAnswer // Hier slaan we het id van het geselecteerde antwoord op
      });

      // Reset de selectie voor de volgende vraag
      selectedAnswer = null;

      // Ga naar de volgende vraag als er nog vragen zijn
      if (currentQuestionIndex < data.questions.length - 1) {
        currentQuestionIndex++;
      } else {
        // Alle vragen beantwoord, bepaal het juiste pakket
        determinePackage();
      }
    } else {
      alert('Selecteer een antwoord voordat je doorgaat.');
    }
  }
</script>

{#if selectedPackage === null}
  <form on:submit={nextQuestion}>
    <!-- Toont huidige vraagnummer -->
    <p>Vraag {currentQuestionIndex + 1}/{data.questions.length}</p>

    <!-- Toont de huidige score -->
    <p>Score: {totalScore}</p>

    <!-- Toont de huidige vraag -->
    <h2>{data.questions[currentQuestionIndex].question}</h2>

    <!-- Loopt door de antwoorden en toont alleen de antwoorden die bij de huidige vraag horen -->
    <ul>
      {#each data.answers.filter(answer => answer.question_id === data.questions[currentQuestionIndex].id) as answer}
        <li>
          <Checkbox {answer} bind:bindGroup={selectedAnswer}/>
        </li>
      {/each}
    </ul>

    <!-- Knop om naar de volgende vraag te gaan -->
    <button type="submit">Volgende vraag</button>
  </form>
{:else}
  <!-- Toont het geselecteerde pakket na het beantwoorden van alle vragen -->
  <div>
    <h2>Jouw aanbevolen pakket: {selectedPackage.package_name}</h2>
    <p>{selectedPackage.description}</p>
    <p>Score: {totalScore}</p>
    <p>Antwoorden:</p>
    <pre>{JSON.stringify(userAnswers, null, 2)}</pre> <!-- Toont de antwoorden in JSON formaat -->
  </div>
{/if}

<style>
  form {
    display: flex;
    flex-direction: column;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  button {
    margin-top: 16px;
  }

  div {
    margin-top: 20px;
  }
</style>
