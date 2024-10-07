<script>
	export let data;
	let person = data.person
	
	// import '../../styles/profile.css'
	// import { error } from './+error.svelte';
	// import { page } from '$app/stores';
	import '../../styles/global.css'
	import { goto } from '$app/navigation';
	import ComponentBox from '$lib/ComponentBox.svelte';

	let score = 0;

	$: score = 4;

	let text;
	let context1;
	let context2
	

</script>

<!-- external head  -->
<svelte:head>
	<title>profile of {person}</title>
	<link rel="preload" href="{person.avatar}" as="image">
	
</svelte:head>

<main data-sveltekit-preload-data="false" >

	<ComponentBox
		heading="page title"
		context1="page context 9876 "
		context2="page context 12345 "
		display="flex"
	>
		<a href="/Inlog">login </a>
		<span>--</span>
		<a href="/overview">overview</a>

	
		<!-- content -->
	</ComponentBox>


</main>


<style>

*{
	/* transition */
	--pageDelay: .5s;
	--pageDuration: .5s;
	--pageTransTiming: linear;
	--pageTrans: var(--pageDuration) var(--pageTransTiming) var(--pageDelay);

	/* outline */
	--Ol-color:var(--D-base-bk);
	--Ol-size:2px;
	--Ol-style:solid;
	--outline: var(--Ol-style) var(--Ol-size) var(--Ol-color); 

}




main{

	position: relative;
	display: flex;
	/* flex-direction: column; */
	/* justify-content: center; */
	/* align-items:center; */

	width: 100%;
	height: 100vh;
	overflow: hidden;
	perspective: 3000px;

	
	background: linear-gradient(90deg, var(--D-base-bk) 26%, var(--D-mid-bk) 100%)
	
}	

/* /////////////////////////// */
/* general content container */
/* /////////////////////////// */

</style>