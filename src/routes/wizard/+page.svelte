<script>
    export let data;
</script>
  
  {#if data.questions && data.questions.length > 0} 
    <ul>
      {#each data.questions as question}
        <li>{question.question} {question.id}</li> 
      {/each}
    </ul>
  {:else}
    <p>Er zijn geen vragen beschikbaar.</p>
  {/if}
  