<script>
    import {Button} from '$lib';

    function refreshPage(event) {
        event.preventDefault();
        window.location.reload();
        console.log(window.location);
    }
</script>
<header>
    <nav>
        
        <a href="/" on:click|preventDefault={refreshPage}>
            <img src="./images/Deloitte.svg" alt="Deloitte logo" width="100" height="50">
        </a>
        <!-- <a href="/profile">profile</a> -->
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