<script>
  import {Checkbox} from '$lib';
  import {totalScore} from '$lib/stores'
  
  export let data; // Export de data

  let currentQuestionIndex = 0; // Huidige vraagnummer
  let selectedAnswer = null; // Geselecteerde antwoord
  // let $totalScore = 0; // Totale score
  let userAnswers = []; // Gebruiker antwoorden array
  let selectedPackage = null; // Geselecteerde pakket

  // Functie om het juiste pakket te selecteren op basis van de totale score
  function determinePackage() {
    // fetch data.packages en en ga langs elke package
    selectedPackage = data.packages.find(pkg =>
      // vergelijk de$totalScore van de gebruiker met de min_score en max_score van elke package
     $totalScore >= pkg.min_score && $totalScore <= pkg.max_score
    );
  }

  // Functie om naar de volgende vraag te gaan
  function nextQuestion(event) {
    // prevent de normale form functie
    event.preventDefault();

    // check of de gekozen antwoord niet leeg is
    if (selectedAnswer !== null) {
      // Voeg de geselecteerde score toe aan de totale score
     $totalScore += parseInt(selectedAnswer);

      // Sla het huidige antwoord op in de juiste structuur
      userAnswers.push({
        question: data.questions[currentQuestionIndex].id, // fetch de question tabel en sla de id op van de huidige vraag
        answer: selectedAnswer // sla de id op van de huidige antwoord
      });

      // Reset de selectie voor de volgende vraag
      selectedAnswer = null;

      // Ga naar de volgende vraag als er nog vragen zijn door te checken hoe groot de questions array is
      if (currentQuestionIndex < data.questions.length - 1) {
        // naar de volgende vraag
        currentQuestionIndex++;
      } else {
        // Alle vragen beantwoord, bepaal het juiste pakket
        determinePackage();
      }
    } else {
      // geef een alert als er geen antwoord is gekozen
      alert('Selecteer een antwoord voordat je doorgaat.');
    }
  }
</script>

<!-- check of er al een pakket is gekozen -->
{#if selectedPackage === null}
  <form on:submit={nextQuestion}>
    <!-- Toont huidige vraagnummer -->
    <p>Vraag {currentQuestionIndex + 1}/{data.questions.length}</p>

    <!-- Toont de huidige score -->
    <p>Score: {$totalScore}</p>

    <!-- Toont de huidige vraag -->
    <h2>{data.questions[currentQuestionIndex].question}</h2>

    <!-- Loopt door de antwoorden en toont alleen de antwoorden die bij de huidige vraag horen -->
    <ul>
      <!-- fetch de antwoorden en filter ze op de question_id en vergelijk die met de huidige vraag id -->
      {#each data.answers.filter(answer => answer.question_id === data.questions[currentQuestionIndex].id) as answer}
        <li>
          <!-- bind de waarde van de gekozen antwoord aan het component en het antwoord zelf  -->
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
    <p>Score: {$totalScore}</p>
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
