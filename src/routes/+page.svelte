<script>
	// ==================================================
  	// Import
  	// ==================================================
    import { WinC, Button, Overview, Section, Card, List, ListItem, Line, Window } from '$lib';
	import { onMount } from 'svelte';
	
	// ==================================================
  	// Props
  	// ==================================================
	/** @type {{data: any}} */
	let { data } = $props();
	let loggedIn = $state(false);

	function logout(){
		loggedIn = false;
		data.userID = null;
	}

	// ==================================================
  	// find title name
  	// ==================================================
	function findTitle(id) {
		const titleName = data.titles.find((title) => title.id === id);
		return titleName ? titleName.title: "None";
	}

	// ==================================================
  	// Login handler
  	// ==================================================
	async function handleLogin(event) {
		const formData = new FormData(event.target);
		const email = formData.get("email");
		const password = formData.get("password");

		const response = await fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password })
		});

		const result = await response.json();

		if (response.ok) {
			console.log(result.message);
			loggedIn = true;
		}else {
			console.log(result.message);
			loggedIn = false;
		}

		event.preventDefault();
	}
</script>

{#if !loggedIn}
<Window title="Deloitte." body="Welkom bij het Deloitte Mobiliteits Programma.">
	<form onsubmit={handleLogin}>
		<label> E-mail</label>
		<input type="email" name="email" placeholder="enter your email"  value="test@hva.nl" required>
		<label>Password</label>
		<input type="password" name="password" placeholder="enter your password" value="Deloitte" required>
		<Button 
		sort="submit" 
		text='Login' 
		color='inherit'
		class='login'/>
	</form>
</Window>
{:else}
<Window title={data.users[3].name} body="Jouw persoonlijke gegevens.">
	<!-- <p>Job title: {findTitle(user.title_id)}</p> -->
	<p>Email: {data.users[3].email}</p>
	<Button sort="/wizard" text="verander je pakket" color=""/>
	<Button sort="logout" text="logout" color="red" clickCallback={() => logout()}/>
</Window>
{/if}

<Line/>

<Section 
subtitle="Wat bieden wij aan" 
title="Welkom bij het Deloitte Mobiliteitsprogramma" 
body="Welkom bij de mobiliteitshub van Deloitte, exclusief voor onze medewerkers. Hier helpen we je om het mobiliteitspakket te vinden dat 
het beste aansluit op jouw persoonlijke en professionele behoeften. Begin vandaag nog en ontdek hoe je het meeste uit jouw reismogelijkheden kunt halen."/>

<Line/>

<Section 
subtitle="Een vergoeding van Deloitte" 
title="Reiskostenvergoeding" 
body="Hoewel je onze kantoren door heel het land vindt, is de kans groot dat er niet één direct naast je voordeur is. 
Bij Deloitte bieden wij daarom uitgebreide regelingen die jou voorzien in jouw persoonlijke mobiliteitsbehoeften en waardoor 
jouw zakelijke reizen gewoon vergoed worden."/>

<Line/>

<Section
subtitle="Beschikbare mobiliteitspakketten"
title="Mobiliteitspakketten"
body="Op basis van jouw functietitel en voorkeuren hebben we een aantal mobiliteitspakketten geselecteerd die perfect 
aansluiten op jouw reisbehoeften. Bekijk de beschikbare opties hieronder en kies het pakket dat het beste bij jou past.">
<List classStyle="row">
	{#each data.packages as mobilityPackage}
	<ListItem>
		<Card path="https://fdnd-agency.directus.app/assets/{mobilityPackage.image}" jobTitle={findTitle(mobilityPackage.title_id)} title={mobilityPackage.package_name} body={mobilityPackage.description}/>
	</ListItem>
	{/each}
</List>
</Section>

<Line/>

<Section
subtitle="kom je in aanmerking voor leasing?"
title="Leaseregeling"
body="Of je in aanmerking komt voor de Leaseregeling hangt af van je afdeling en functieniveau en of je een arbeidsovereenkomst hebt van 
minimaal 24 uur. Als deelnemer aan deze regeling mag je kiezen voor een leaseauto. Wanneer je niet voor een leaseauto kiest, kun je 
ook kiezen voor andere opties, zoals een bruto mobiliteitsvergoeding als supplement op je salaris waarmee je je zakelijke reizen kunt bekostigen. 
Reis je liever met het OV? Dan kun je ook kiezen voor een zakelijke OV-kaart waarmee je op kosten van Deloitte kan reizen naar je zakelijke- én 
privébestemmingen met het OV. Waar je ook voor kiest, je krijgt van ons altijd een zakelijke OV-kaart waarmee je op een gemakkelijke en 
milieuvriendelijke manier kunt reizen."/>

<Line/>

<Section
subtitle="Onze andere optie"
title="Mobiliteitsregeling"
body="Wanneer je niet in aanmerking komt voor de leaseregeling, maak je aanspraak op onze andere mobiliteitsregeling. Deze regeling geeft jou de flexibiliteit 
om voor iedere zakelijke reis zelf je vervoersmiddel te bepalen. Wanneer je met een eigen vervoersmiddel reist, zoals met de fiets, scooter of de auto, 
ontvang je van ons een kilometervergoeding. Liever met het OV? Daarvoor krijg je van ons een zakelijke OV-kaart voor 1ste klas treinreizen en 
andere OV vervoersmiddelen. Voor studenten die bij ons stage komen lopen of bij ons afstuderen kennen we geen aparte reiskostenvergoeding. 
We gaan ervan uit dat je als student kunt reizen op je OV-studentenchipkaart. Indien dit niet het geval is kunnen we een aparte regeling met je treffen. 
Heb je hier vragen over? Neem dan contact op met de recruiter van de afdeling waar je stage wil gaan lopen of wilt afstuderen."/>

<style>
	:global(main .main-panel){
		width: 100%;
		height: clamp(fit-content , 100vw - 15rem, 30cqh);
		border: none !important;
		border-radius: var(--cc-radius,inherit);
		overflow: hidden;

		& > h2{
			font-size: clamp(2rem, 0.917rem + 4.1478vw, 6cqi);
			height: fit-content;
			z-index: 1;
		}
	
		&::before{
			content: '';
			position: absolute;
			top: -10cqh;
			bottom: -10cqh;
			left: -20cqw;
			width: clamp(50cqw, 100vw + 10vw, 70cqw);
			max-width: 100vw;
			background-color: var(--D-t-support);
			opacity: 0.2;
			z-index: 0;
			border-radius: 50%;
			transition: 1s ease-out;
		}

		@container  (width <= 550px){

			flex-direction: column !important;

			&::before{
				width: clamp(200cqw, 100vw - 15rem, 300cqw) !important;
			}
		}

		&:global(.not-logged)  {
			display: flex;
			flex-direction: row ;
			flex-wrap: wrap ;
			gap: 5%;

			@container  (width <= 850px){
	
	
				&::before{
					width: clamp(90cqw, 100vw - 11rem, 200cqw);
				}
			}
		}

		&:global(.not-logged) form {
			display: flex;
			flex-direction: column;
			width: 22cqw ;
			align-self: stretch;
		}

		&> .buttonB{
			/* width and radius of the button box */
			--cc-radius:1pc;
			--w:40;
			--p: calc(calc(100 - var(--w))/2);
			background: none ;
			gap: 5%;
			padding-inline: 0;
			border-radius: inherit;

		}

		:global(.buttonB) {

			& button{
				padding: 3%;
				padding-inline: 5%;
				margin-block: 0.5cqh;
				font-size: clamp(1rem,4cqw, 2.3rem) !important;
				text-transform: capitalize;
			}

			& a{
				padding: 3%;
				padding-inline: 5%;
				margin-block: 0.5cqh;
				font-size: clamp(1rem,4cqw, 2.3rem) !important;
				text-transform: capitalize;
			}
		}

		form {
			z-index: 3;
			display: flex;
			gap: 1rem;
			width: fit-content;
			padding: 1%;
			margin-block: 1%;
			border-radius: var(--cc-radius,inherit);
		}

		form label{
			font-size: 1rem;
			color: var(--LD-text);
			display: none;	
			
			@starting-style{
				translate: 0 3rem;
				opacity: 0;
			}
		}

		form:has(input:nth-of-type(1):focus-within) label:nth-of-type(1),
		form:has(input:nth-of-type(2):focus-within) label:nth-of-type(2){
			display: block;
			transition: opacity 2s ease-out,translate .7s ease-out;
		}

		form :is(input:nth-of-type(1):valid + input:nth-of-type(2):valid) label{
			display: none;
			transition: opacity 2s ease-out,translate .7s ease-out;
		}


		form input{
			padding: 3%;
			border-radius:  var(--cc-radius,inherit);
			border: none;
			font-size: clamp(1rem,1.3cqw, 2rem);
			padding-inline: 5%;

		}


		form input:focus-within:invalid{
			background-color: color-mix(in srgb, currentcolor 50%, rgba(251, 139, 139, 0.845) );
			outline: none;
		}

		form input:focus-within:valid{
			background-color: white;
			outline: solid 1px color-mix(in srgb, var(--D-t-support) 50%, rgb(187, 192, 28) );
		}

		form :global(.login){
			width: 100%;
			height: fit-content;
			font-size: 1rem;
			place-self: center;
			justify-self: center;
			padding: 3%;
			padding-inline: 5%;
			margin-block: 0.5cqh;
			font-size: clamp(1rem,5cqw, 2rem);
			text-transform: capitalize;
		}

	}

	:global(.info-panel){
		width: 100%;
		height: fit-content;
		border-radius: 0px !important;
		padding-block: 6cqh !important;

		&> h2{
			color: var(--D-dark-support,var(--LD-text));
			font-size: 1.3rem;
			text-transform: capitalize;
		}

		&> h2 + p:nth-of-sort(1):has(~ p) {
			font-size: 1.8rem;
			font-weight: clamp(500, 6.1478vw, 700);
			font-weight: 500;
			color: blue;
		}

		&> p ~ p {
			font-size: 1rem;
		}
	}

	:global(.package-panel){
		width: 100%;
		height: fit-content;
		border: none !important;
		&> h2{
			color: var(--D-dark-support,var(--LD-text));
			font-size: 2rem;
		}
	}

	p{	
		font-size: 1rem;
		color: var(--LD-text);
	}

	:global(.box1,.box2){
		border: solid 1px !important;
	}
	
</style>