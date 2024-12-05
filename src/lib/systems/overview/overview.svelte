<script>
    import {ComponentBox,PackageComponent, GeneralInfo, Card, WinC, Button} from "$lib";
	// import '../../styles/overview.css'
    // import {MobilityOptions,GeneralInfo, ,ComponentBox} from '$lib';
   

  /** @type {{data: any, num?: number}} */
  let { data, num = 0 } = $props();
</script>

<main>
   

    <WinC
    role="child"
    context=""
    class="box2"
    >
        <PackageComponent {data} />
        <div class='cardbox'>
            <!-- <Card title="titel" body="beschrijving" job="Manager" imgSrc="" imgAlt="card-img" cardType="visual-card"/> -->
            <!-- <Card title="titel" body="beschrijving" job="Manager" imgSrc="" imgAlt="card-img" cardType="visual-card"/> -->
            <!-- <Card title="titel" body="beschrijving" job="Manager" imgSrc="" imgAlt="card-img" cardType="visual-card"/> -->
            <!-- <Card title="titel" body="beschrijving" job="Manager" imgSrc="" imgAlt="card-img" cardType="visual-card"/> -->
        </div>
       
    </WinC>

    <WinC
        role="child"
		context=""
		class="box1"
    >
        <GeneralInfo 
        {num}/>

    </WinC>
</main>

<style>
    h1 {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
    }
    
    main {
        display: flex;
        flex-direction: column;
        gap: 2em;

       
    }
</style>
