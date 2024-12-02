<!-- componnet description -->
<!-- what it is   -->
<!-- how to use -->
<!-- what are the properties  -->


<script lang=ts>
	import { goto } from '$app/navigation';

	interface Props {
		text?:string;
		type:string;
		color?:string;
		line?:number;
		class?: string;
		children?: () => import('svelte').Snippet<[]>; 

	}

	let {type,text,color,line,children, class: CLASS, ...props}: Props = $props();
	let typeContext = $state('')
	
	$effect(()=>{
		 if(type.startsWith('#')){
			typeContext = 'link'
		} else if(type.startsWith('/')){
			typeContext ='page'
		} else if(type == 'submit'){
			typeContext ='submit button'
		} else {
			typeContext = 'button'
		}
	})

</script>

{#if type.startsWith('/')}
	<button 
	onclick={()=> goto(type)} 
	aria-label='{text} {typeContext}'
	style="
	color:{color}; 
	color:var(--color); 
	border:solid {line}px;"
	class='route {CLASS}'
	title='{text +' '+ typeContext}'
	>
	{text || typeContext}
	</button>
{:else if type.startsWith('#')}
	<a 
	href="{type}" 
	aria-label="{text} {typeContext}"
	style='color:{color};border:solid {line}px;'
	class='anchor {CLASS}'
	title='{text +' '+ typeContext}'

	>
	{text || typeContext}
	</a>
{:else if type == 'submit'}
	<button 
	type="{type}" 
	aria-label="{text} {typeContext}"
	style='color:{color};border:solid {line}px;'
	class='submit {CLASS}'
	title='{text +' '+ typeContext}'

	>
	{text || typeContext}
	</button>
{:else if type == ''}
	<button 
	typeof="disabled"
	style='color:red;border:solid 1px; cursor:default;'
	aria-disabled="true"
	>
	{text||'🚫'}
	</button>
{:else}
	<button 
	typeof="disabled"
	style='color:grey;border:solid 1px; cursor:default;'
	aria-disabled="true"
	>
	{text||'❔'}
	</button>
{/if}

<style>

:is(button,a){
	/* --D-white2:rgba(255, 255, 255, 0.514); */
	--color:var(--D-t-support);
	/* --color:rgb(129, 50, 182); */

		display:grid;
		place-content: center;
		/* min-width: 100%; */
		width: fit-content;
		height: fit-content;
		padding: .4cqi;
		padding-inline: .8rem;
		
		font-family: inherit;
		font-size: clamp(1rem, 0.0917rem + 4.3478vw, 2cqi);
		font-weight: 700;
		text-decoration: none;
		text-wrap:nowrap ;
		cursor: pointer;
		
		
		contain:content;
		container-type:normal;
		container-name: button;

		background: white;
		/* box-shadow: inset 0 -1px 5px color-mix(in oklch var(--color),var(--D-white2));		 */
		border-radius: max(1pc, 3pc);
		border: 2px solid;
		
		border-color: color-mix(in oklch, var(--color) 15%, var(--border)100%);
		/* background-color: color-mix(in oklch, var(--color), #0007); */
		/* background-image: linear-gradient(1deg,var(--D-mid-bk) 5%, rgb(46, 200, 202) 46%); */
		color: color-mix(in lch longer hue,  var(--color) 28%, var(--LD-background) 100%);
		/* color: color-mix(in oklch, var(--color),#ffffff); */
}





</style>