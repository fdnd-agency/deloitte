<script>
	export let data;
	import '../../styles/overview.css'
    import MobilityOptions from '$lib/mobility-options.svelte';
    import GeneralInfo from '$lib/general-info.svelte';
    import PackageComponent from '$lib/package-component.svelte';

    export let num = 0;
</script>

<main>
    <header>
            <h1>Mobility options</h1>
        <span>
            <a href="/wizard">Wizard</a>
            <a href="/inlog">Log in</a>
        </span>
    </header>

    <MobilityOptions
    {num}/>

    <GeneralInfo 
    {num}/>

    <PackageComponent {data} />
</main>