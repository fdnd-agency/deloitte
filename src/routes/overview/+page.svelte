<script>
    import {ComponentBox, CardComponent, GeneralInfo} from "$lib/index.js";
	export let data;
	// import '../../styles/overview.css'
    import {MobilityOptions,GeneralInfo, PackageComponent,ComponentBox} from '$lib';
   

  export let num = 0;
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
