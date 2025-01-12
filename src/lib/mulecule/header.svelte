<script lang="ts">
    import { preventDefault } from 'svelte/legacy';
    // import { WinC,Button } from './component-building-block';
    import {Button} from '$lib';

    interface Props {
		class?: string;
		children?: import('svelte').Snippet<[]>; 
	}

    let { children, class:CLASS, ...props } : Props = $props();
    // Add onclick to the Props type definition



    function refreshPage(e) {
        e.preventDefault();
        window.location.reload();
        // console.log(window.location);
    }

    function darkMode(e) {
        e.preventDefault();
        document.preferences.colorScheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    }


   

</script>
<header style="z-index: 3;">
    <nav>
        
        <!-- add new logo text based logo -->
        <a href="/">
            <!-- <img src="./images/Deloitte.svg" alt="Deloitte logo" width="100" height="50"> -->
             <h1><span>Deloitte</span>. <em>Mobility app</em></h1>
        </a>
        
        <Button
        text="mode"
		color="black"
		sort="#dark"
		class="dark-mode"
        onclick={darkMode}
        />

       
    </nav>
</header>

<style>
    header {
        position: relative;
        width: 100%;
        padding-inline: var(--B-padding-inline);
        padding-block: 2%;
        position: sticky;
        box-shadow: 0 10px 5px -10px rgba(0, 0, 0, 0.278);
    }

    nav {
        display: flex;
        justify-content: space-between;
        position: relative;
        align-items: center;
        flex-wrap: nowrap;
        gap: 3%;
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        color: var(--D-t-support,var(--LD-text));
        min-width: fit-content;
        width: fit-content;
    }

    a h1 {
        /* width: 100%; */
        width: fit-content;
        font-size: 1.8rem;
        font-weight: 700;
        padding-inline: 1cqw;
        margin: 0;
        color: var(--LD-text);
    }

    a h1 em {
        color: var(--text-tertiary,var(--LD-text));
        border-left: solid 1px ;
        padding-left: 5px;
        text-align: start;
        font-size: 1rem;
        font-weight: 400;
    }

    a:hover em{
        translate:0px -10px;
    }

    :global(.dark-mode){
        /* background-color: red!important; */
        padding-block: .1% !important;
    }
</style>