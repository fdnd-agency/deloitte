<script>
    import Header from '$lib/header.svelte';
    // import Footer from '$lib/footer.svelte';
</script>

<div class="body">

    <div class="header">
        <Header/>
    </div>
    
    <main>
        <slot/>
    </main>

    <div class="footer">
        <!-- <Footer/> -->
    </div>
    

</div>


<style>
    .body {
        display: flex;
        flex-direction: column;
        background: linear-gradient(90deg, var(--D-base-bk) 26%, var(--D-mid-bk) 100%);
        min-height: 100vh; 
    }

    .header {
        flex-shrink: 0; 
        /* outline: solid red; */
    }

    main {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        /* outline: solid blue; */
        padding-inline: 10%;
    }

    .footer {
        flex-shrink: 0; 
    }
</style>