<script>
    import {Header,Footer,WinC} from '$lib';
    import { onNavigate } from '$app/navigation';

    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();

    onNavigate((navigation) => {
        if(!document.startViewTransition){return};

        return new Promise((resolve) =>{
            document.startViewTransition(async ()=>{
                resolve();
                await navigation.complete;
            })
        })
    })

</script>
   
<Header class="header"/>
    
<WinC role='window' class="main" color=''>
        {@render children?.()}
</WinC>

<Footer class="footer"/>
    




<style>

    :root{

        --wc-radius:clamp(0.5rem, 2vw, 1.8pc);
        --wc-bg:rgb(108, 108, 255);
        --wc-bg:var(--D-t-support);
        --cc-bg:rgb(250, 255, 114);
        --cc-bg:var(--D-base-bk);
        --cc-radius:var(--wc-radius);

        @supports (interpolate-size: allow-keywords){
            interpolate-size: allow-keywords;
            transition-behavior: allow-discrete;
            scroll-behavior: smooth;
            font-size-adjust: 0.5;
        }
    }

</style>