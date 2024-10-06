<script>
	export let data;
	let person = data.person
	
	// import '../../styles/profile.css'
	// import { error } from './+error.svelte';
	// import { page } from '$app/stores';
	import '../../styles/global.css'
	import { goto } from '$app/navigation';
	import ButtonComponent from '$lib/Button-component.svelte';

	let score = 0;

	$: score = 4;

	let text
	

</script>

<!-- external head  -->
<svelte:head>
	<title>mobilty package of .....</title>
	<link rel="preload" href="{person.avatar}" as="image">
</svelte:head>


<main>
	
	<a href="/Login">login </a>
	<span>--</span>
	<a href="/overview">overview</a>

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

	color: black;
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
	
}	

/* /////////////////////////// */
/* general content container */
/* /////////////////////////// */

</style>