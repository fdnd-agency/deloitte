<script>
	import { goto } from '$app/navigation';
    import { WinC,Button,Overview } from '$lib';
	import Card from '$lib/mulecule/component-card.svelte';
	let userlogedIn = true;
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
			<Button
			type="/profile"
			text="profile"
			color="white"
			/>
			<Button
			type="/wizard"
			text="wizard"
			color="white"
			/>
			<!--  -->
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
		type="/wizard"
		text="Start nu"
		color="white"
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
	:global(.main-panel){
		width: 100%;
		height: fit-content;
		border: none !important;
		border-radius: var(--cc-radius,inherit);
		overflow: hidden;

		&>h2{
			font-size: clamp(2rem, 0.917rem + 4.1478vw, 6cqi);
		}

		&::before{
			content: '';
			position: absolute;
			top: -10cqh;
			bottom: -10cqh;
			left: -20cqw;
			width: clamp(50cqw, 100vw - 10vw, 70cqw);
			max-width: 100vw;
			/* aspect-ratio: 1; */
			background-color: var(--D-t-support);
			opacity: 0.2;
			z-index: 0;
			border-radius: 50%;


		}

		/* @container  (width > 400px){
			&::before{
				width: 100cqw;
			}
		} */

		&> .buttonB{
			/* background: none ; */
			
		}
	}

	:global(.info-panel){
		width: 100%;
		height: fit-content;
		border-radius: 0px !important;
		padding-block: 6cqh !important;
		&> h2{
			color: var(--D-dark-support,var(--LD-text));
		}

		&> h2 + p:nth-of-type(1):has(~ p) {
			font-size: 1.8rem;
			font-weight: clamp(500, 6.1478vw, 700);
			font-weight: 500;
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