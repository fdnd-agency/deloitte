<script>
    import {ComponentBox,PackageComponent, GeneralInfo} from "$lib/index.js";
	// import '../../styles/overview.css'
    // import {MobilityOptions,GeneralInfo, ,ComponentBox} from '$lib';
   

  /** @type {{data: any, num?: number}} */
  let { data, num = 0 } = $props();
</script>

<main>
   
            <ComponentBox
                heading="Mobility options"
                context1=""
                context2=""
                display="flex"
                titleAlign="center"
                class="top-c"
            ></ComponentBox>

    <ComponentBox
    heading=""
    context1=""
    context2=""
    display="flex"
    titleAlign=""
    class="box2"
    >
        <PackageComponent {data} />
    
    </ComponentBox>

    <ComponentBox
    heading=""
		context1=""
		context2=""
		display="flex"
		titleAlign=""
		class="box1"
    >
        <GeneralInfo 
        {num}/>

    </ComponentBox>
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
