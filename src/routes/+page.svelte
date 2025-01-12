<script>
	import { goto } from '$app/navigation';
    import { WinC,Button,Overview } from '$lib';
	
	let userlogedIn = true;
	let newProfile = false;

</script>


	



{#if userlogedIn}
	<WinC
	role="child"
	title="Deloitte"
	context='Strart nu de vragenlijst om een passend pakket te vinden'
	color='lightblue'
	class="main-panel"
	>
		<WinC
		role='buttonBox'
		color=''
		class='buttonB'>

			{#if newProfile}
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
{:else}
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
	</WinC>
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
title="Een vergoeding van Deloitte"
context='Reiskostenvergoedingen'
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
			--w:50;
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