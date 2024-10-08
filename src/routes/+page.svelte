<script>
  export let data;
</script>

{#each data.items as item}
<h1>{item.package_name}</h1>
{/each}


<a href="/Inlog">login</a>
<a href="/overview">overzicht</a>
