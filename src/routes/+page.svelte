<script>
	import { goto } from '$app/navigation';
    import { WinC,Button,Overview } from '$lib';
	import Card from '$lib/mulecule/cards/component-card.svelte';
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
			<Button
			type="/overview"
			text="overview"
			color="white"
			/>
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
color="var(--D-base-bk)"
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
		/* overflow: clip; */

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
			/* background-color: var(--D-t-support); */
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
			color: var(--D-dark-support,var(--LD-text)) ;
		}
		
	}

	p{	
		font-size: 1rem;
		color: var(--LD-text);
	}

	:global(.box1,.box2){
		border: solid 1px !important;
	}

	:global(.package-panel .cardbox ){
		/* display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: fit-content;
		outline: solid 1px teal !important; */
		/* display: none; */
	}

	:global(main:has(button:is(:active,:hover))){
		/* background-color: red; */

			transition: none;
			--s: 75px; /* control the size*/
			--c1: #ffffff;
			--c2: #ad2a44b0;
			--c3: #446f1ba5;
  
			--_c:#0000,var(--c1) 1deg 79deg,#0000 81deg;
			--g0:conic-gradient(from 140deg at 50% 87.5% ,var(--_c));
			--g1:conic-gradient(from 140deg at 50% 81.25%,var(--_c));
			--g2:conic-gradient(from 140deg at 50% 75%   ,var(--_c));
			--g3:conic-gradient(at 10% 20%,#0000 75%,var(--c1) 0);
			background:
			var(--g0) 0 calc(var(--s)/-4),var(--g0) var(--s) calc(3*var(--s)/4),
			var(--g1) ,var(--g1) var(--s) var(--s),
			var(--g2) 0 calc(var(--s)/ 4),var(--g2) var(--s) calc(5*var(--s)/4),
			var(--g3) calc( var(--s)/-10) var(--s),
			var(--g3) calc(9*var(--s)/10) calc(2*var(--s)),
    		repeating-conic-gradient(from 45deg,var(--c2) 0 25%,var(--c3) 0 50%);
  			background-size: calc(2*var(--s)) calc(2*var(--s));
		
	}
	
</style>