<script>
	// export let data;
	export let heading;
	export let context1;
	export let context2;
	export let display;
	// export let background;
	// class functions
	let boxProps = {
    class:[$$restProps.class]
    }
</script>

<div style="display:{display};" {...boxProps}>
	
	<h1>{heading}</h1>
	<p class="box-context">{context1}</p>
	<p class="box-context">{context2}</p>

	<slot/>
</div>

<style>
	div{
		background-color: var(--LD-background);
		margin: .3rem;
		padding: 1.5rem;
		padding-inline: 3rem;
		flex-direction: column;
		flex: 1 1 100%;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: 50px;
		outline: solid var(--D-base-bk) ;
	}

	.component-box:hover{
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

	.primary{
        color:green;
    }
    .danger {

        color:red;
		

		
    }

</style>