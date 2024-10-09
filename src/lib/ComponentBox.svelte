<script>
	// export let data;
	export let heading;
	export let context1;
	export let context2;
	export let display;
	export let titleAlign;
	// export let background;
	// class functions
	let boxProps = {
    class:[$$restProps.class]
    }
</script>

<div style="display:{display};" {...boxProps}>
	
	<h1 style="text-align: {titleAlign};">{heading}</h1>
	<p class="box-context">{context1}</p>
	<p class="box-context">{context2}</p>

	<slot/>
</div>

<style>
	*{
		width: 100%;
		
	}

	div{
		/* background-color: var(--LD-background); */
		margin: .3rem;
		padding: 1.5rem;
		padding-inline: 3rem;
		flex-direction: column;
		/* flex-grow: 1; */
		height: fit-content;
		overflow: hidden;
		border-radius: 50px;
		/* outline: solid var(--D-base-bk) ; */
	}

	div:hover{
		/* box-shadow: 0px 0px 100px var(--D-black); */
	}

	h1{
		font-size: 1.8rem;
		color: var(--LD-text);
	}
	
	p.box-context{
		font-size: 1.2rem;
		color: var(--LD-text);

	}

	.top-c{
        margin-bottom: 2%;
		display: flex;
		align-items: center;
		background-color: var(--LD-background);

		& h1{
		color: var(--D-t-support);
		font-size: 3rem;
		}
    }


	.inlog{
		--LD-background: light-dark(rgba(255, 255, 255, 0.489),black);
		flex-shrink: 1;
		background-color: var(--LD-background);

	}

	

	.box1{
		/* outline: solid purple; */
		flex: 0 0 30%;
		background-color: var(--LD-background);
		height: 30vh;
	}

	.box2{
		/* outline: solid blue; */
		flex-grow:1 0 40%;
		background-color: var(--LD-background);
		height: fit-content;

		& h1{
			color: var(--LD-text);
			font-size: 2rem;
			margin-bottom: 1rem;
		}

		& p{
			color: var(--LD-text);
			margin-bottom: .5rem;
		}

		& input{
			margin-bottom: 1%;
			width: 30%;
			padding: 1%;
			border-radius: 1.5pc;
		}
	}

</style>