<!-- componnet description -->
<!-- what it is   -->
<!-- how to use -->
<!-- what are the properties  -->





<script lang=ts>

// defining property type

	interface Props {
		title?: string;
		context?: string;
		role: string;
		class?: string;
		color?:string;
		line?:string;
		children?: import('svelte').Snippet<[]>; 
	}
	// props
	let {title, context, role, children, class: CLASS, color,line, ...props} : Props = $props(); 

</script>

<!-- layout A -->
{#snippet A()}
	{#if title}
		<h2>{title}</h2>
	{/if}
	{#if context}
		<p>{context}</p>
	{/if}
	{#if children}
		{@render children()}
	{/if}
{/snippet}

<!-- layout B -->
{#snippet B()}

	{#if title}
	<!-- maybe can be a header  -->
	<div class="header">
		<h1>{title}</h1>
		<p>{context}</p>
	</div>
	{/if}

	{#if children}
	<section style="--color:{color}">
		{@render children()}
	</section>
	{/if}
{/snippet}

<!-- logic for all the types of containers  -->
{#if role == 'window'}
	<!-- window container -->
	<main class="contain {CLASS}" style="--wc-bg:{color}; outline:solid {line}px;" {...props} >
		{@render B()}
	</main>
{:else if role == 'child'}
	<!-- any container inside the main container -->
	<div class="contain child-container {CLASS}" style="--cc-bg:var(--color,--cc-bg);outline:solid {line}px;--color:{color}" {...props}>
		{@render A()}
	</div>
{:else if role == 'buttonBox'}
	<!-- for containers with multiple buttons -->
	<div class="contain buttonBox {CLASS}" style="background-color:{color};" {...props}>
		{@render A()}
	</div>
{:else if role == 'header'}
	<!-- for the main header content of a section  -->
	<div class="contain {CLASS}" {...props}>
		{@render B()}
	</div>
{/if}
<!--  create a backup template for if there is no input for a role -->

<style>

	:root{
	--wc-radius:clamp(0.5rem, 2vw, 1.8pc);
	--wc-bg:rgb(108, 108, 255);
	/* --wc-bg:var(--D-base-bk); */
	--wc-bg:var(--D-t-support);
	--cc-bg:rgb(250, 255, 114);
	--cc-bg:var(--D-base-bk);
	--cc-radius:var(--wc-radius);
	}

	.contain{
		container-type:inline-size;
		position: relative;
		padding: 2%;

	}

	/* window container is by default a grid  */
	main{
		flex: 1;
		position: relative;
		display: grid;
		grid-template-columns:[full-start] minmax(1px, .1fr) [context-start] repeat(2,1fr) [context-end] minmax(1px, .1fr) [full-end];
		grid-template-rows: auto;
		width: 100%;
		min-height: 100%;
		/* min-height: 100dvh; */
		/* overflow-y: scroll; */


		container-name:window-container;

		background-color:var(--wc-bg,white) ;
		color: var(--wc-text,black);
		border-radius: var(--wc-radius,inherit);

		& > :is(:nth-child(n)){
		grid-column: context;
		}
	}

	/* all content should be in the middle grids */
	main >:nth-child(n){
		grid-column: context;
		border-radius: var(--cc-radius,inherit);
	}

	main >:nth-child(1):is(.header),.header:nth-of-type(1){
		grid-column: context;
		outline: solid;
		height: fit-content;
		text-align: center;
		border-radius: var(--cc-radius,inherit);

		&:is(:focus-visible,:focus-within){
			outline: dotted rgba(255, 0, 0, 0.112);
		}
	}

	main section{
		height: 100%;
		width: 100%;
		border-radius: var(--cc-radius,inherit);
		/* overflow-y: scroll; */

	}

	/* button box logic and sizing */
	 .buttonBox{
		--cc-radius:1pc;
		--w:50;
		--p: calc(calc(100 - var(--w))/2);
		display: flex;
		min-width: fit-content;
		align-self: start; 
		flex-wrap: wrap;
		
		/* needs to be refactored . was fixed by taking away % from inset inline */
		/* position: absolute; */
		/* inset-inline: calc(var(--p) * 1%); */
		/* inset-inline: calc(var(--p) * 1cqi); */
		bottom: 0;
		width: calc(var(--w) * 1% );
		width: calc(var(--w) * .7% );
		height: auto;
		border-radius: var(--cc-radius,inherit);

	}

	

	
	/* child containers */
	.child-container{
		--cc-text:var(--LD-text);
		--cc-bg:var(--D-base-bk ,var(--LD-background));

		display: flex;
		flex-direction: column;

		container-name:child-contianer;

		background-color:var(--cc-bg,rgb(167, 86, 86)) ;
		color: var(--cc-text,black);
		border-radius: var(--cc-radius,inherit);
		border-top:solid 1px var(--cc-text,var(--D-t-support));
		margin-block:2%;
	}

	.buttonB{
		background-color: var(--D-mid-bk);
		background-color: inherit;
		background: color-mix(in oklch, var(--color) 70%, rgba(0, 0, 0, 0.873)5%);

	}

	
	@media(min-width: 700px){
		main{
			grid-template-columns:[full-start] minmax(1px, .1fr) [context-start] repeat(8,1fr) [context-end] minmax(1px, .1fr) [full-end];
		}

		main >:nth-child(n){
			grid-column: span auto;
		}

		main >:nth-child(1):is(.header),.header{
			grid-column: context;
		}



	}

	/* @container child-contianer (width){
		
	} */


</style>