<script>
    // export let data;
    export let num
</script>

<section>
    <div>
        <a href="/"><p>Cash</p><img src="/bb7f42b0abb308065352031173fcbf8d.jpg" alt="cash"></a>
        <a href="/"><p>Mobility +</p><img src="/pexels-pille-kirsi-222198-1093184.jpg" alt="mobiaty +"></a>
        <a href="/"><p>Lease car</p><img src="/P5211348.jpg" alt="lease car"></a>
        <a href="/"><p>Unlimited public transport</p><img src="/630691dc3994f39fc9031d5b6d6c66be.jpg" alt="unamited pubac transport"></a>
    </div>
</section>

<article>
        <h2>Cash:</h2>
        <button>close</button>
    <ul>
        <li>A gross cash amount is paid to you every month.</li>
        <li>You are expected to manage your own transportation to and from work or client locations.</li>
        <li>You can use Deloitte-subsidized transport options if desired.</li>
    </ul>
</article>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    @keyframes pageLoadAnimation {
        0% {
            transform: translateX(-50%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 100%;
        }
    }

    section {
        display: flex;
        width: 100vw;
        max-height: 70vh;   
        transition: .8s cubic-bezier(0.34, -0.04, 0.17, 0.98);
        animation: 1s cubic-bezier(0.34, -0.04, 0.17, 0.98) pageLoadAnimation;

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

