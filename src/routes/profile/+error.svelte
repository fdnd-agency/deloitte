<script>
	export let error;

	$: message = error.message;

	redirect(302, '/Inlog');


</script>

<h1>
	{message}
	eeeeeeeeeeeeeee
</h1>