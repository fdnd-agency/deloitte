<script lang="ts">
	import { goto } from '$app/navigation';

	interface Props {
		sort?: string;
		text?: string;
		color?: string;
		line?: number;
		class?: string;
		children?: () => import('svelte').Snippet<[]>;
	}

	type Props = {
        // ... other properties
        onclick?: () => void; // Add this line
    };


	let { sort = '',text, color, line,  children, class: CLASS, ...props }: Props = $props();
	let sortContext = ''; // remove $state

    $effect(()=>{
       
        
        if (sort.startsWith('#')) {
            sortContext = 'link';
        } else if (sort.startsWith('/')) {
            sortContext = 'page';
        } else if (sort === 'submit') {
            sortContext = 'submit button';
        } else {
           sortContext = 'button';
        }
    })

</script>

{#if sort.startsWith('/')}
	<button
		onclick={() => goto(`${sort}`)}
		aria-label='{text} {sortContext}'
		style="
			color:var(--color);
			border:solid {line || 0}px;"
		class='route {CLASS}'
		title='{text + ' ' + sortContext}'
	>
		{text || sortContext}
	</button>
{:else if sort.startsWith('#')}
	<a
		href="{sort}"
		aria-label="{text} {sortContext}"
		style='color:{color};border:solid {line || 0}px;'
		class='anchor {CLASS}'
		title='{text + ' ' + sortContext}'
	>
		{text || sortContext}
	</a>
{:else if sort === 'submit'}
	<button
		type="{sort}"
		aria-label="{text} {sortContext}"
		style='color:{color};border:solid {line || 0}px;'
		class='submit {CLASS}'
		title='{text + ' ' + sortContext}'
	>
		{text || sortContext}
	</button>
{:else if !sort}
    <button
        disabled={true}
        style='color:red;border:solid 1px; cursor:default;'
        aria-disabled="true"
    >
        {text || '🚫'}
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
	:is(button, a) {
		/* --D-white2:rgba(255, 255, 255, 0.514); */
		--color: var(--D-t-support);
		/* --color:rgb(129, 50, 182); */

		display: grid;
		place-content: center;
		/* min-width: 100%; */
		width: fit-content;
		height: fit-content;
		padding: 0.4cqi;
		padding-inline: 0.8rem;

		font-family: inherit;
		font-size: clamp(1rem, 0.0917rem + 4.3478vw, 2cqi);
		font-weight: 700;
		text-decoration: none;
		text-wrap: nowrap;
		cursor: pointer;

		contain: content;
		container-type: normal;
		container-name: button;

		background: white;
		/* box-shadow: inset 0 -1px 5px color-mix(in oklch var(--color),var(--D-white2));		 */
		border-radius: max(1pc, 3pc);
		border: 2px solid;

		border-color: color-mix(in oklch, var(--color) 15%, var(--border) 100%);
		/* background-color: color-mix(in oklch, var(--color), #0007); */
		/* background-image: linear-gradient(1deg,var(--D-mid-bk) 5%, rgb(46, 200, 202) 46%); */
		color: color-mix(in lch longer hue, var(--color) 28%, var(--LD-background) 100%);
		/* color: color-mix(in oklch, var(--color),#ffffff); */
	}

	:is(button, a):is(:hover) {		
	
			/* background-color: color-mix(in oklch, var(--color), #0007); */
			box-shadow: 0 5px 5px rgba(13, 13, 13, 0.108);
			border-color: color-mix(in oklch, var(--color) 15%, var(--border) 100%);
			color: color-mix(in lch longer hue, var(--color) 28%, var(--LD-background) 100%);
			transition: 0.17s ease-in-out ;
			translate: 0 -2px;
		
	}


	:is(button, a):active {
		translate: 0 0px;
		box-shadow:inset 0 5px 8px rgba(13, 13, 13, 0.108);

	}

</style>