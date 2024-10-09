<script>
	export let text;
	// export let data;	
	export let color;
	export let colorLine = color;
	export let task;

	let buttonProps = {
    class:[$$restProps.class]
    }
</script>

{#if task.length > 1}

<a href="{task}" style="border: solid {colorLine}; color:{color};" {...buttonProps}>
	{text}
</a>
{:else}

<button on:click={()=>{task}} style="border: solid {colorLine}; color:{color}; --button-color:{color};" {...buttonProps}>
	{text}
</button>
{/if}

<style>

	button,a{
		--D-white2:rgba(255, 255, 255, 0.514);
		width: fit-content;
		height: fit-content;
		color: var(--D-white);
		border-radius: max(1pc, 3pc);
		padding: 10px;
		padding-inline: 1.5%;
		background-image: linear-gradient(1deg,var(--D-mid-bk) 5%, rgb(46, 200, 202) 46%);
		box-shadow: inset 0 -1px 5px var(--D-white2);		
		border: none;
		/* font-size: clamp(1rem, 0.0217rem + 4.3478vw, 3.5rem); */
		contain:content;
		container-type:normal;
		container-name: button;
		text-wrap:nowrap ;
	}

	:is(button,a):hover{
		box-shadow: inset 0 -1px 9px var(--D-white2);		

	}

	:is(button,a):active{
		box-shadow: inset 0 -1px 5px var(--D-dark-support);	
		box-shadow: inset 0 -1px 5px var(--D-white);	
		background-image: linear-gradient(5deg,var(--D-mid-bk) 5%, rgb(46, 200, 202) 46%);
		scale:0.991;	
		transition: 0.12s cubic-bezier(0.547,-0.282,0.181,0.539);
		transition-property: box-shadow, scale;
	}

	:is(button,a):focus-visible{
		outline: solid ;
		background-image: none;
		background-color: var(--D-dark-support);
	}

	.nextPage{
		width: 100%;
		height: 7cqh;
		font-size: clamp(1rem, 0.0217rem + 4.3478vw, 4cqh);
		margin-bottom: 10%;
		color: white;
		background-color: var(--black);
		border-radius:.8pc;
		border: none;
		display: grid;
		place-content: center;

		&:focus-visible,:focus-within{
			background-color: var(--D-mid-bk);
			outline-style: dashed;
			color: var(--D-black);
		}
	}

	.logout{
		width: 100%;
		background-image: none;
		background-color: var(--D-white);
		border-radius: 5px;

		
	}

	.logout:active{
		/* background-image: inherit; */
		background-color:var(--button-color) ;

	}

</style>		