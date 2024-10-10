<script>
    import {Button} from '$lib';

    function refreshPage(e) {
        e.preventDefault();
        window.location.reload();
        // console.log(window.location);
    }

    function logging() {
        console.log('nav clicked',window.location.reload());
    }


   

</script>
<header style="z-index: 3;" on:click={logging}>
    <nav>
        
        <a href="/" on:click|preventDefault={refreshPage}>
            <img src="./images/Deloitte.svg" alt="Deloitte logo" width="100" height="50">
        </a>
        
        <Button
        text="info"
		color="black"
		colorLine="none"
		task="/overview"
		class=""
        />
    </nav>
</header>

<style>
    header {
        width: 100%;
        padding: 1rem;
        position: sticky;
    }

    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>