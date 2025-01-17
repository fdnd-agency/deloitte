<script>
	import { redirect } from '@sveltejs/kit';
	/** @type {{error: any}} */
	let { error } = $props();

	let message = $derived(error.message);

	redirect(302, '/Inlog');


</script>

<h1>
	{message}
</h1>