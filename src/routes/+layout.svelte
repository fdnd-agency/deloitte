<script>
    import {Header,Footer} from '$lib';
    import '../styles/global.css';
    import { WinC,Button } from '$lib';

    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();

    // import Footer from '$lib/footer.svelte';


</script>
   
<Header class="header" style='--change:1%'/>
    
<WinC role='window' class="main" color=''>
        {@render children?.()}
        {@render children?.()}
</WinC>

<Footer class="footer"/>
    




<style>

@view-transition {
	navigation: auto;
}

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

        animation-name: riso;
        animation-timing-function: linear;
        animation-direction: alternate;
        animation-fill-mode: both;

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
    animation-direction: alternate;
    animation-fill-mode: both;
    animation-timing-function: linear;
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
    transform: translate(calc(var(--x) * -.1%), calc(var(--y) * 1%)) rotateY(calc(25deg * var(--x)/70 )) scale(calc(1 - var(--x)/150));
    animation-name:syz ;
    animation-direction: alternate;
    animation-fill-mode: both;
    animation-timeline: scroll();
    animation-timing-function: linear;
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
        animation-direction: alternate;
        animation-fill-mode: both;
        animation-timeline: scroll();
        animation-timing-function: linear;
        border-radius: inherit;

    }

    & > h2{
        transform: perspective(3000px) translateX(calc(var(--x) * -.3%));
        animation-name:blur,syz;
        animation-direction: alternate;
        animation-fill-mode: both;
        animation-timing-function: linear;

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
        animation-direction: alternate;
        animation-fill-mode: both;
        animation-timeline: scroll();
        animation-timing-function: linear;

    }
   

}

:global(body main){
    /* --x:0%;
    --y:0%; */
    /* background-color: red !important; */
    translate: calc(-25px * var(--x)/100) 0px;


    background-image: linear-gradient(to right, red calc(20%), blue calc(60%)),linear-gradient()
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

        --s: 48px; /* control the size*/
        --c1: #d8d8d8;
        --c2: #bd3c3ec8;
        --c3: #2a8150b8;
        
        --b: calc(var(--s)/2.67); /* control the thickness of the wavy line */
        
        --_r: calc(1.28*var(--s) + var(--b)/2) at left 50%;
        --_f: calc(100% - var(--b)),var(--c1) calc(101% - var(--b)) 100%,#0000 101%;
        --g0: calc(-.8*var(--s)),var(--c2) var(--_f);
        --g1: calc(-.8*var(--s)),var(--c3) var(--_f);
        --_s: calc(1.5*var(--s) + var(--b));
        background: 
            radial-gradient(var(--_r) bottom var(--g0)) calc(2*var(--s)) calc(-1*var(--_s)),
            radial-gradient(var(--_r) bottom var(--g1)) calc(-1*var(--s)) calc(var(--_s)/-2),
            radial-gradient(var(--_r) top    var(--g1)) 0 var(--_s),
            radial-gradient(var(--_r) top    var(--g0)) var(--s) calc(var(--_s)/ 2),
            linear-gradient(var(--c2) 50%,var(--c3) 0);
        background-size: calc(4*var(--s)) var(--_s);


        

        
    }

    50% {
        --x: 50;
        --a:63%;

        --s: 48px; /* control the size*/
        --c1: #d8d8d8;
        --c2: #bb2528;
        --c3: #146b3a;
        
        --b: calc(var(--s)/2.67); /* control the thickness of the wavy line */
        
        --_r: calc(1.28*var(--s) + var(--b)/2) at left 50%;
        --_f: calc(100% - var(--b)),var(--c1) calc(101% - var(--b)) 100%,#0000 101%;
        --g0: calc(-.8*var(--s)),var(--c2) var(--_f);
        --g1: calc(-.8*var(--s)),var(--c3) var(--_f);
        --_s: calc(1.5*var(--s) + var(--b));
        background: 
            radial-gradient(var(--_r) bottom var(--g0)) calc(2*var(--s)) calc(-1*var(--_s)),
            radial-gradient(var(--_r) bottom var(--g1)) calc(-1*var(--s)) calc(var(--_s)/-2),
            radial-gradient(var(--_r) top    var(--g1)) 0 var(--_s),
            radial-gradient(var(--_r) top    var(--g0)) var(--s) calc(var(--_s)/ 2),
            linear-gradient(var(--c2) 50%,var(--c3) 0);
        background-size: calc(4*var(--s)) var(--_s);
    }
}

@keyframes riso {
  68% {
    text-shadow: 5px 15px hsl(208.82 60% var(--a)),-15px 15px hsl(128.23 43% var(--a)),-15px 5px hsl(354.7 43% var(--a)) ;
    color: rgba(0, 0, 0, 0.786);
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