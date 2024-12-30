<script>
    import {Header,Footer} from '$lib';
    import '../styles/global.css'
    import { WinC,Button } from '$lib';
    import {onNavigate} from '$app/navigation'

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

    // import Footer from '$lib/footer.svelte';
</script>


   
<Header class="header"/>
    
<WinC role='window' class="main" color='transparent'>
        {@render children?.()}
</WinC>

<Footer class="footer"/>
    




<style>

</style>