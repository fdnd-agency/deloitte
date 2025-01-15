<script>
	export let error;
	import { redirect } from '@sveltejs/kit';

	$: message = error.message;

	redirect(302, '/Inlog');


</script>

<h1>
	{message}
</h1>