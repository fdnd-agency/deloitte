<script>
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


    <!-- <MobilityOptions
    {num}/> -->

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