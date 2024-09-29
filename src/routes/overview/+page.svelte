<script>
	export let data;
	import '../../styles/overview.css'
    import MobilityOptions from '$lib/mobility-options.svelte';
    import GeneralInfo from '$lib/general-info.svelte';
</script>

<main>
    <header>
            <h1>Overview</h1>
        <span>
            <a href="/wizard">Wizard</a>
            <a href="/inlog">Log in</a>
        </span>
    </header>

    <MobilityOptions/>
    <GeneralInfo />
</main>