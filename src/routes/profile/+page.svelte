<script>
	import '../../styles/global.css'
	// import { goto } from '$app/navigation';
	import {ComponentBox, Package, Button} from '$lib';
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
		
		heading="profile"
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
		heading=""
		context1=""
		context2=""
		display="flex"
		titleAlign=""
		class="box1"
		>
		
		<article>
			<h1>naam</h1>
			<div></div>
			<Button
			text="logout"
			color="red"
			colorLine=""
			task="/Inlog"
			class="logout"
			/>


		</article>


		</ComponentBox>


		<ComponentBox
		heading="Persoonlijke gegevens"
		context1="bekijk je persoonlijke gegevens"
		context2=""
		display="flex"
		titleAlign=""
		class="box2"
		>

		{#if $totalScore == 300}
		<p>{$totalScore} is cash</p>
		{:else if $totalScore == 400 }
		<p>{$totalScore} is bike</p>
		{:else}
		<p> score is {$totalScore}</p>
		{/if}

		<label for="Full-name">
			<input type="text" id="Full-name" placeholder="naam">
		</label>
		
		<label for="email">
			<input type="email" name="" id="email" placeholder="email">
		</label>
		
		<label for="job">
			<input type="text" name="" id="job" placeholder="Job title">
		</label>
		
		<label for="MP">
			<input type="text" id="MP" placeholder="mobilteit pakket">
		</label>

		<Button
		text="Start wizard"
		color="black"
		colorLine="none"
		task="/wizard"
		class=""
		/>
		<br>
		<Button
		text="overview"
		color="black"
		colorLine="none"
		task="/overview"
		class=""
		/>
		
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
	/* outline: solid red; */

}



.profile-detail :nth-child(2){
	/* outline: solid rgb(0, 217, 255); */

}

</style>