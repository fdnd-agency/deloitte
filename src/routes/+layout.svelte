<script>
    import {Header,Footer} from '$lib';
    import '../styles/global.css'
    import { WinC,Button } from '$lib';

    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();

    // import Footer from '$lib/footer.svelte';
</script>


   
<Header class="header"/>
    
<WinC role='window' class="main" color='transparent'>
        {@render children?.()}
</WinC>

<Footer class="footer"/>
    




<style>

</style>