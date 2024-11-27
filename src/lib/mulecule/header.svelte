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
        width: 100%;
        padding-inline: var(--B-padding-inline);
        position: sticky;
    }

    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>