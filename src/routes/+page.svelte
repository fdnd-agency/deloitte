<script>
    export let data;

	
	export async function load({ url }) {
        return {
        status: 302,
        redirect: '/inlog',
        };
  }


</script>

<a href="/Inlog">login</a>
<a href="/overview">overzicht</a>
