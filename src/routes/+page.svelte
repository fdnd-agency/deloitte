<script>
  export let data;
  import Checkbox from '$lib/checkbox.svelte';
</script>

<h1>{data.person.name}</h1>

<div>
{#each {length: 4} as _, i}
  <Checkbox/>
{/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
