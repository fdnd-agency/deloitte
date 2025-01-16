<script>
	// ==================================================
  	// Import
  	// ==================================================
    import { WinC,Button,Overview } from '$lib';
	import { onMount } from 'svelte';
	import Section from '$lib/atom/component-section.svelte';
	
	// ==================================================
  	// Props
  	// ==================================================
	/** @type {{data: any}} */
	let { data } = $props();
	let loggedIn = $state(false);

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

		event.preventDefault;
	}
</script>

{#if !loggedIn}
<Section
subtitle="Enter your personal information"
title="Login"
body="Enter your creditentials">
	<form onsubmit={handleLogin}>
	<label>
		E-mail
		<input type="email" name="email" placeholder="enter your email">
	</label>
	<label>
		Password
		<input type="password" name="password" placeholder="enter your password">
	</label>
	<button type="submit">Login</button>
	</form>
</Section>
{:else}
<p>{data.userID}</p>
{/if}





<style>
	:global(main .main-panel){
		width: 100%;
		height: clamp(fit-content , 100vw - 15rem, 30cqh);
		border: none !important;
		border-radius: var(--cc-radius,inherit);
		overflow: hidden;

		& > h2{
			font-size: clamp(2rem, 0.917rem + 4.1478vw, 6cqi);
		}

		&::before{
			content: '';
			position: absolute;
			top: -10cqh;
			bottom: -10cqh;
			left: -20cqw;
			width: clamp(50cqw, 100vw + 10vw, 70cqw);
			max-width: 100vw;
			/* aspect-ratio: 1; */
			background-color: var(--D-t-support);
			opacity: 0.2;
			z-index: 0;
			border-radius: 50%;


		}

		@container  (width <= 550px){
			&::before{
				width: clamp(200cqw, 100vw - 15rem, 300cqw);
			}
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