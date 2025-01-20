<script>
    import {PackageComponent, GeneralInfo} from "$lib";
    import {WinC,Button} from "$lib";
    import Card from '$lib/mulecule/component-card.svelte';

   

  /** @type {{data: any, num?: number}} */
  let { data, num = 0 } = $props();
</script>

<div class="overview">
 
    <article>
        <PackageComponent {data} />
        <Card title="titel" body="beschrijving" job="Manager" imgSrc="./tesla_car_PNG46.png" imgAlt="card-img" cardType="visual-card"/>
        <Card title="titel" body="beschrijving" job="Manager" imgSrc="./VanMoof_S3_dark (1).png" imgAlt="card-img" cardType="visual-card"/>
        <Card title="titel" body="beschrijving" job="Manager" imgSrc="./pexels-dan-voican-2624103-17854203.jpg" imgAlt="card-img" cardType="visual-card"/>
        <Card title="titel" body="beschrijving" job="Manager" imgSrc="./pexels-pille-kirsi-222198-1093184.jpg" imgAlt="card-img" cardType="visual-card"/>

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
        background-image: linear-gradient(0deg, transparent -5%, color-mix(in srgb, var(--wc-bg) 50%, white ) 8%, transparent 70%);

        @container (width <= 600px){
            flex-direction: column;
            gap: 2em;
            width: 100%;
            background: none;

            & :global(.visual-card){
                max-width: 100%;
            }
        }

    }

    .overview article:nth-of-type(2){
        display: flex;
        flex-direction: row;
        gap: 2em;
        background-color: color-mix(in srgb, var(--wc-bg) 50%, white ) ;
        /* background-image: linear-gradient(0deg, transparent -5%, var(--D-mid-bk) 0%,var(--D-mid-bk) 98.5%, transparent 105%); */



    }
</style>
