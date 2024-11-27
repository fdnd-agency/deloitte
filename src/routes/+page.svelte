<script>
	import { goto } from '$app/navigation';
    import { WinC,Button } from '$lib';
	let userlogedin = false;
</script>

{#if userlogedin}
	<WinC
	role="child"
	title="Deloitte"
	context='Strart nu de vragenlijst om een passend pakket te vinden'
	color='lightblue'
	class="main-panel"
	>
		<WinC
		role='buttonBox'
		color='orange'>
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
	context='Strart nu de vragenlijst om een passend pakket te vinden'
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
title="Eeen vergoeding van Deloitte"
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
color="red"
class="package-panel"
>
<!-- cards list with pakketten -->

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
		height: 30cqh;
		border: 1px solid black;
		border-radius: var(--cc-radius,inherit);


		&>h2{
			font-size: 24px;
		}
	}

	:global(.info-panel){
		width: 100%;
		height: fit-content;
		border-radius: 0px !important;
		padding-block: 6cqh !important;
		&> h2{
			color: var(--D-dark-support,var(--LD-text)) ;
		}

		&> h2 + p:nth-of-type(1):has(~ p) {
			font-size: 1.8rem;
		}

		&> p ~ p {
			font-size: 1rem;
		}
	}

	p{	
		font-size: 1rem;
		color: var(--LD-text);
		/* color:yellow; */
	}
</style>