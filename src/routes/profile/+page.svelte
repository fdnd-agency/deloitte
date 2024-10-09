<script>
	import '../../styles/global.css'
	import { goto } from '$app/navigation';
	import ComponentBox from '$lib/ComponentBox.svelte';
	import {totalScore} from '$lib/stores'

	export let data;
	let person = data.person
	
	// import '../../styles/profile.css'
	// import { error } from './+error.svelte';
	// import { page } from '$app/stores';

	let score = 0;
	$: score = 4;

	let text;
	let context1;
	let context2;
	let background;

	
	

</script>

<!-- external head  -->
<svelte:head>
	<title>profile of {person}</title>
	<link rel="preload" href="{person.avatar}" as="image">
	
</svelte:head>

<section data-sveltekit-preload-data="false" >

	<ComponentBox 
		
		heading="12"
		context1=""
		context2=""
		display=""
		titleAlign="center"
		class="top-c"
	

	>
	 <!-- content -->

	</ComponentBox>

	<div class="profile-detail">
		<ComponentBox
		heading="87"
		context1=""
		context2=""
		display="flex"
		class="box1"
		>
			<h1> {person.name} </h1>
		</ComponentBox>


		<ComponentBox
		heading=""
		context1=""
		context2=""
		display="flex"
		class="box2"
		>
		<h1>{person.surname}</h1>
		</ComponentBox>

	</div>


</section>


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

	gap: 3%;
}




section{

	position: relative;
	align-items:center;
	overflow: hidden;
	perspective: 3000px;
	
}	


/* /////////////////////////// */
/* general content container */
/* /////////////////////////// */

.profile-detail{
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 50vh;
}

.profile-detail > *{
	outline: solid red;

}



.profile-detail :nth-child(2){
	outline: solid rgb(0, 217, 255);

}

</style>