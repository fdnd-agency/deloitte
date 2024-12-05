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

:global(body){
   perspective: 1000px;

   animation: riso;
}
@keyframes riso {
  68% {
    text-shadow: 15px 5px hsl(208.82 43% var(--a)),-15px 15px hsl(128.23 43% var(--a)),-15px 5px hsl(354.7 43% var(--a)) ;
  }

  0%,100% {
    text-shadow: none;
  }
}
</style>