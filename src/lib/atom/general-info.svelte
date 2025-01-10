<script>
    // export let data;
    import { WinC } from '$lib';
    /** @type {{num: any}} */
    let { num } = $props();

</script>

<WinC
role="child"
title="General information"
context=''
color="transparent"
class="info-panel general-info"
>
    <section>
        <details open>
            <summary>Business OV card</summary>
            <blockquote>Everyone receives a "Business OV Card" for travel. The cost is deducted from the salary before tax, making travel more economical.</blockquote>
        </details>
        <details>
            <summary>Deloitte Bike System</summary>
            <blockquote>Employees can lease a bike for a monthly fee.</blockquote>
        </details>
        <details>
            <summary>Bike Purchase</summary>
            <blockquote>Employees can purchase a bike from their salary with tax benefits</blockquote>
        </details>
        <details>
            <summary>Additional Features</summary>
            <blockquote>The Business OV Card can also be used for renting bikes or cars when needed.</blockquote>
        </details>
    </section>


</WinC>    


<style>
        *{
        @supports (interpolate-size: allow-keywords){
            interpolate-size: allow-keywords !important;
            transition-behavior: allow-discrete !important;
            scroll-behavior: smooth;
            font-size-adjust: 0.5;

        }

    }


    @keyframes pageLoadAnimation {
        0% {
            transform: translateX(10%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 100%;
        }
    }

    :global(.info-panel.general-info){
       border-top: none !important;
       padding: 0% !important;
       padding-inline: 2% !important;
       transition: 1s cubic-bezier(0.34, -0.04, 0.17, 0.98);

       & h2{
              font-size: 2em ;
              
       }
    }

    section {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        animation: 1s cubic-bezier(0.34, -0.04, 0.17, 0.98) pageLoadAnimation;

        /* & h2 {
            padding: 0.5em 0;
        } */

        /* & h3 {
            text-align: center;
            padding: 0.5em 0;
        } */

        & blockquote {
            padding: 0 0 1em 0;
        } 
    }

    details{
        margin-block: 1%;
        transition:all .5s, block-size 1s,content-visibility 1s;
        transition-behavior: allow-discrete !important;

        /* background-color: blue; */
    }

    summary::marker{
        color: var(--LD-text);
    }

    summary{
        padding: 1%;
        background-color: rgba(255, 255, 255, 0.39);
        color: var(--LD-text);
        border-radius: 0.5em;
        cursor: pointer;
    }

   details::details-content{
        /* background-color: yellow; */

        block-size: 0;
        transition: block-size 1s,content-visibility 1s;
        overflow: hidden;
    }

    details[open]::details-content{
        block-size: auto;
       
    }

    section:has(details:hover) details[open]::details-content{
        /* block-size: 13rem; */
       /* background-color: yellow; */
    }

    section:has(details[open]) details:not([open]) summary{
        /* background-color: sandybrown; */
        transition: all 1s;
    }
        
   

    
    details blockquote{
       padding-block: 2%;

   }
</style>