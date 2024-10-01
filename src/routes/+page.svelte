<script>
    export let data;
    
	export async function load({ url }) {
    return {
      status: 302,
      redirect: '/Inlog'
    };
  }

</script>

<h1>{data.person.name}</h1>



<style>


  
</style>
