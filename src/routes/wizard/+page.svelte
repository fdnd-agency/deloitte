<script>
  import {Checkbox} from '$lib';
	import ButtonComponent from '$lib/button-component.svelte';
	import ComponentBox from '$lib/ComponentBox.svelte';
  import {totalScore} from '$lib/stores'
  
  export let data; // Export de data

  let currentQuestionIndex = 0; // Huidige vraagnummer
  let selectedAnswer = null; // Geselecteerde antwoord
   $totalScore = 0; // Totale score
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

<ComponentBox
    heading="Mobility program"
		context1=""
		context2=""
		display="flex"
		titleAlign="center"
		class="top-c"

/>



{#if selectedPackage === null}

<form on:submit={nextQuestion}>
   <!-- wizard module -->
   <!-- Toont de huidige vraag -->
   <!-- Toont huidige vraagnummer -->
   <!-- Toont de huidige score -->
  
  <ComponentBox
    
        heading="Vraag {currentQuestionIndex + 1}/{data.questions.length}"
        context1="Score: {$totalScore}"
        context2=""
        display="flex"
        titleAlign=""
        class="box1 wizard"
    >
        <a href="/overview">Lees meer over de diverse mobilitiet opties</a>

      <ComponentBox
        heading="{data.questions[currentQuestionIndex].question}"
        context1=""
        context2=""
        display="flex"
        titleAlign=""
        class="checkboxBox"
      >
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
      </ComponentBox>
    <!-- Knop om naar de volgende vraag te gaan -->
     <div class="buttonBox">

       <ButtonComponent
           text="Vorige vraag"
           color="black"
           colorLine="none"
           task=""
           class=""
           type=""/>
   
       <ButtonComponent
           text="Volgende vraag"
           color="black"
           colorLine="none"
           task=""
           class=""
           type="submit"/>
          </div>
        </ComponentBox>
        </form>
{:else}
<!-- Toont het geselecteerde pakket na het beantwoorden van alle vragen -->
<ComponentBox
    heading="Jouw aanbevolen pakket: {selectedPackage.package_name}"
		context1="{selectedPackage.description}"
		context2="Score: {$totalScore}"
		display="flex"
		titleAlign=""
		class="box1"

>

  <div>
    <p>Antwoorden:</p>
    <pre>{JSON.stringify(userAnswers, null, 2)}</pre> <!-- Toont de antwoorden in JSON formaat -->
  </div>
</ComponentBox>



{/if}


<style>
  form {
    display: flex;
    flex-direction: column;

    & h1{
      color: var(--D-dark-support);
      margin-bottom: 1%;
    }

    & p{
     font-size: 2rem;
     margin-bottom: 1%;
    }

    &  a{
      margin-bottom: 3%;
    }
  }


  ul {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;

   

  }

  li{
    height: 7vh;
    width: 70%;
    max-width: 30vw;
    font-size: clamp(10px, 50vw - 2rem, 1.5rem);

    
    & label{
     /* outline: solid red; */
      width: 100%;
      height: 100%;
      border-radius: 3.5pc;
    }
  }



  .buttonBox{
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 15%;
    width: 35vw;
    height: 3rem;
    margin-top: 20px;

    & button{
      width: 100%;
      height: 100%;
      padding-inline: 5%;
    }
  }


  div {
  
  }
</style>
