<script>
    import {ComponentBox,PackageComponent, GeneralInfo} from "$lib/index.js";
    import {WinC,Button} from "$lib";
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
        <p>cards</p>
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
