<script>
   import { preventDefault } from 'svelte/legacy';

    import {Button} from '$lib';
	// import { WinC,Button } from './component-building-block';

    let { children, class:CLASS, ...props } = $props();

    function refreshPage(e) {
        e.preventDefault();
        window.location.reload();
        // console.log(window.location);
    }


   

</script>
<header style="z-index: 3;">
    <nav>
        
        <!-- add new logo text based logo -->
        <a href="/">
            <!-- <img src="./images/Deloitte.svg" alt="Deloitte logo" width="100" height="50"> -->
             <h1><span>Deloitte</span>. <em>Mobility app</em></h1>
        </a>
        
        <!-- <Button
        text="info"
		color="black"
		colorLine="none"
		task="/overview"
		class=""
        /> -->

       
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
        position: relative;
        align-items: center;
        flex-wrap: nowrap;
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
        font-size: 1.5rem;
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
</style>