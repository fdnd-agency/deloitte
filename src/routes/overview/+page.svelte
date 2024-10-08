<script>
	// export let data;
	import '../../styles/overview.css'
    import MobilityOptions from '$lib/mobility-options.svelte';
    import GeneralInfo from '$lib/general-info.svelte';
    import Footer from '$lib/footer.svelte';

    export let num = 0;
</script>

<main>
    <header>
            <h1>Mobility options</h1>
    </header>

    <MobilityOptions
    {num}/>

    <GeneralInfo 
    {num}/>

    <Footer />
</main>