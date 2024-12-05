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

:root{
    --x:0;
    --y:0;
    

    
}

@property --x{
        syntax: "<number>"; 
        initial-value: 0;
        inherits: false;
    }

    @property --y{
       syntax: "<number>"; 
        inherits: false;
        initial-value: 0;
    }

:global(body){
   perspective: 1000px;

   animation: riso;
}

/* :global(.main){
    --wc-bg: transparent ;

   
} */

:global(p) {
    /* --x:0;
    --y:0; */
    width: 50%;
    transition: 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) ;
    transform: translate3d(calc(4% * var(--x)/5), calc(var(--y) * 1%), calc(var(--x) * 10px));
    animation-name:syz,riso ;
    animation-timeline: scroll();
    /* animation-range-start:0px ;
    animation-range-end: 500px; */
    /* rotate: y calc(25deg * var(--x)/30); */
    scale: calc(1 + var(--x)/23);
    z-index: 10;
   
}

:global(body .contain){
    /* --x:0%;
    --y:0%; */
    /* background-color: rgb(0, 157, 255) !important; */
    
    transition: 2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform: translate(calc(var(--x) * -.1%), calc(var(--y) * 1%)) rotateY(calc(25deg * var(--x)/70 )) scale(calc(1 - var(--x)/150 ));
    animation:syz ;
    animation-timeline: scroll();
    transform-origin: center ;
    z-index: 1;
    /* animation-range-start:0px ;
    animation-range-end: 500px; */
    /* scale: calc(1 - var(--x)/110); */

    & .child-container:nth-of-type(n)::after{
        content: '';
        position: absolute;
        inset: 0px;
        z-index: 1;
        /* background-color: hsla(0, 0%, 0%, 0.386); */
        backdrop-filter: blur(calc(1px * var(--x)/60 ));
        animation-name:syz;
        animation-timeline: scroll();
        border-radius: inherit;

    }

    & > h2{
        transform: perspective(3000px) translateX(calc(var(--x) * -.3%));
    animation:blur,syz ;
    animation-timeline: scroll();
    /* filter: blur(calc(1px * var(--x)/5)); */
    }

    & .buttonBox{
        transform: 
        perspective(calc(5000px - (30px * var(--x))))
        /* translateZ(calc(400px * mod(var(--x), 2)))  */
        translateZ(calc(400px * var(--x)/10)) 
        translateX(calc(var(--x) * 6%)) 
        rotateY(calc(3deg * var(--x)/-7)) 
        rotateZ(calc(15deg * var(--x))) 
        ;

        z-index: 4;
        animation-name: syz,blur;
        animation-timeline: scroll();

    }
   

}

:global(body main){
    /* --x:0%;
    --y:0%; */
    /* background-color: red !important; */
    translate: calc(-25px * var(--x)/100) 0px;
}
    


@keyframes syz {

    0%{
        --a:40%
    }

    100% {
        --x: 0;
        --a:70%;
    }

    20%,70% {
        --x: 45;
        --a:63%;
        background-color: rgba(36, 136, 186, 0.085);
    }

    50% {
        --x: 50;
        --a:63%;
    }
}

@keyframes riso {
  68% {
    text-shadow: 15px 5px hsl(208.82 43% var(--a)),-15px 15px hsl(128.23 43% var(--a)),-15px 5px hsl(354.7 43% var(--a)) ;
  }

  0%,100% {
    text-shadow: none;
  }
}

@keyframes blur {
    20%,70%{
        filter: blur(8px);
        
    }
}

</style>