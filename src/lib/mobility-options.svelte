<script>
    export let data;
</script>

<section>
    <h2>Mobility options</h2>
    <div>
        <a href="/"><p>Cash</p><img src="/bb7f42b0abb308065352031173fcbf8d.jpg" alt="cash"></a>
        <a href="/"><p>Mobility +</p><img src="/pexels-pille-kirsi-222198-1093184.jpg" alt="mobiaty +"></a>
        <a href="/"><p>Lease car</p><img src="/P5211348.jpg" alt="lease car"></a>
        <a href="/"><p>Unlimited public transport</p><img src="/630691dc3994f39fc9031d5b6d6c66be.jpg" alt="unamited pubac transport"></a>
    </div>
</section>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    section {
        width: 100vw;
        max-height: 60vh;   
        transition: .8s cubic-bezier(0.34, -0.04, 0.17, 0.98);

        & h2 {
            background-color: black;
            color: white;
            text-align: center;
            padding: 0.5em 0;
        }

        & div {
            display: flex;
            flex-direction: row;
            width: 100vw;
            max-height: 65vh;
        }

        & a {
            width: 25vw;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & p {
            color: white;
            position: absolute;
        }

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
                
        & a:hover, a:focus-visible {
            filter: brightness(50%);
            transition: ease-out .2s;
            outline: none;
        }
      }
</style>

