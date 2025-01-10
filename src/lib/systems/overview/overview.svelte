<script>
    import {ComponentBox,PackageComponent, GeneralInfo} from "$lib/index.js";
    import {WinC,Button} from "$lib";
    import Card from '$lib/mulecule/component-card.svelte';

	// import '../../styles/overview.css'
    // import {MobilityOptions,GeneralInfo, ,ComponentBox} from '$lib';
   

  /** @type {{data: any, num?: number}} */
  let { data, num = 0 } = $props();
</script>

<div class="overview">
 
    <article>
        <PackageComponent {data} />
        <Card title="titel" body="beschrijving" job="Manager" imgSrc="" imgAlt="card-img" cardType="visual-card"/>
        <Card title="titel" body="beschrijving" job="Manager" imgSrc="" imgAlt="card-img" cardType="visual-card"/>
        <Card title="titel" body="beschrijving" job="Manager" imgSrc="" imgAlt="card-img" cardType="visual-card"/>
        <Card title="titel" body="beschrijving" job="Manager" imgSrc="" imgAlt="card-img" cardType="visual-card"/>

    </article>
    
    <article>
        <GeneralInfo {num}/>
    </article>
</div>

<style>
    
    .overview {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-block: 1rem;
        
        
    }
    
    h1 {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
    }
    .overview article{
        border-radius: var(--wc-radius) var(--wc-radius)   ;
        padding: 1%;
    }

    .overview article:nth-of-type(1){
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        /* gap: 3%; */
        background-image: linear-gradient(0deg, transparent -5%, var(--wc-bg) 8%, transparent 70%);

    }

    .overview article:nth-of-type(2){
        display: flex;
        flex-direction: row;
        gap: 2em;
        background-color: color-mix(in srgb, var(--wc-bg) 50%, white ) ;
        /* background-image: linear-gradient(0deg, transparent -5%, var(--D-mid-bk) 0%,var(--D-mid-bk) 98.5%, transparent 105%); */



    }
</style>
