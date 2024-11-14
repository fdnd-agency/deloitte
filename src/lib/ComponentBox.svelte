<script>
	// export let data;
	export let heading;
	export let context1;
	export let context2;
	export let display;
	export let titleAlign;
	// export let background;
	// class functions
	export function init() {
		
	}

	
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
		position: relative;
		margin: .3rem;
		padding: 1.5rem;
		padding-inline: 3rem;
		flex-direction: column;
		/* flex-grow: 1; */
		height: fit-content;
		overflow: hidden;
		border-radius: 50px;
		/* outline: solid var(--D-base-bk) ; */
		z-index: 1;

		box-shadow: 0 9px 10px var(--D-mid-bk) ;
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
		width: 100%;

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
		min-height: fit-content;
	}

	.box2{
		/* outline: solid blue; */
		flex-grow:1 0 40%;
		background-color: var(--LD-background);
		min-height: fit-content;

		& h1{
			color: var(--LD-text);
			font-size: 2rem;
			font-weight: 500;
			margin-bottom: 1rem;
		}

		& p{
			color: var(--LD-text);
			margin-bottom: .5rem;
		}

		& form{
			display: flex;
			flex-direction: column;
			/* gap:17%; */
		}

		& form label{
			color: var(--LD-text);
			width: 55%;
			height: 2rem;
			margin-bottom: 3%;
		}
		
		& form input{
			height: 100%;
			width: fit-content;
			padding: 5%;
			font-size: clamp(10px, 50vw - 1rem, 130%);
			border-radius: .5rem;
		}
	}

	.wizard{
		margin: 0;

	}

	.checkboxBox{
		--D-primary-mid-grey: color(display-p3 0.93 0.93 0.93 / 0.28);
		background-color: var(--D-primary-mid-grey);
		padding-inline: 3rem;
		outline: solid var(--D-base-bk);

		& h1{
			margin-left: 1rem;
		}
	}

</style>