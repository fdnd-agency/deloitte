<script>
  export let data;
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

    onMount(() => {
        goto('/Inlog');
    });
</script>

<h1>{data.person.name}</h1>



<a href="/inlog">login</a>
<a href="/overview">overzicht</a>
