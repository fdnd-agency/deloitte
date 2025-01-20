<script>
	// ==================================================
  	// Import
  	// ==================================================
    import { WinC,Button,Overview } from '$lib';
	import { onMount } from 'svelte';
	
	// ==================================================
  	// Props
  	// ==================================================
	/** @type {{data: any}} */
	let { data } = $props();
	let loggedIn = $state(false);
	let loggedInUser = data.users.find(user => user.id === data.userID) || null;
	let newProfile = $state(false);
	
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

		$inspect(loggedInUser, data.userID, loggedIn)
		
	}
</script>

{#if !loggedIn }
<WinC
role="child"
title="Login"
context=""
color='lightblue'
class="main-panel not-logged"
>
<form onsubmit={handleLogin}>
	<p>Enter your personal information</p>
	<label> E-mail</label>
	<input type="email" name="email" placeholder="enter your email" required>
	<label>Password</label>
	<input type="password" name="password" placeholder="enter your password" required>
	<Button 
	sort="submit" 
	text='Login' 
	color='inherit'
	class='login'/>
	</form>
</WinC>

{:else if loggedIn && data.userID >= 1}
	<WinC
	role="child"
	title={loggedInUser?.name}
	context='Strart nu de vragenlijst om een passend pakket te vinden'
	color='lightblue'
	class="main-panel"
	>
	<p>Cookie: {data.userID}</p>
	<p>{loggedInUser?.name}</p>
	<p>{loggedInUser?.email}</p>

		<WinC
		role='buttonBox'
		color=''
		class='buttonB'>

			{#if data.userID < 1}
				<Button
				sort="/wizard"
				text="Start Nu"
				color=""
				/>
			{:else}

				<Button
				sort="/profile"
				text="profile"
				color="white"
				/>

				<Button
				sort="/wizard"
				text="verander je pakket"
				color="white"
				/>
			{/if}		
		</WinC>
	</WinC>
<!-- {:else}
	<WinC
	role="child"
	title="Deloitte"
	context='Start nu de vragenlijst om een passend pakket te vinden'
	class="main-panel"
	>
		<Button
		sort="#login"
		text="Start hier"
		color="black"
		/>
	</WinC> -->
{/if}

<WinC
role="child"
title="Wat beiden wij aan"
context='we helpen je met de mobiliteit van de toekomst'
color="transparent"
class="info-panel"
>
	<p>info about what why the options exist and how to use them</p>
</WinC>

<WinC
role="child"
title="Pakketten"
context='Deloitte biedt een maandelijkse mobiliteitsvergoeding van € 200. Hiermee kun je een abonnement nemen op een deelfiets of een ov-abonnement. Daarnaast kun je ook een elektrische fiets aanschaffen met een eenmalige bijdrage van € 1000.'
color=""
class="package-panel"
>
	<!-- cards list with pakketten -->
	<p>info about what why the options exist and how to use them</p>
	<Overview data/>
</WinC>

<WinC
role="child"
title="Een vergoeding van Deloitte"
context='Reiskostenvergoedingen'
color="transparent"
class="info-panel"
>
	<p>info about what why the options exist and how to use them</p>
</WinC>



<WinC
role="child"
title="kom je in aanmerking voor leasing?"
context='leaseregeling'
color="transparent"
class="info-panel"
>
	<p>info about what why the options exist and how to use them</p>
</WinC>

<WinC
role="child"
title="Mobiliteitregeling"
context=''
color="transparent"
class="info-panel"
>
	<p>info about what why the options exist and how to use them</p>
</WinC>

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
				font-size: clamp(1rem,5cqw, 2.5rem);
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
			}
		}

		form input{
			padding: 3%;
			border-radius:  var(--cc-radius,inherit);
			border: none;
			font-size: clamp(1rem,1.3cqw, 2rem);
			padding-inline: 5%;

		}

		form:has(input:nth-of-type(1):focus-within) label:nth-of-type(1){
			display: block;
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