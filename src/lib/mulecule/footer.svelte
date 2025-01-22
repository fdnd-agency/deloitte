<script lang="ts">
 interface Props {
		class?: string;
		children?: import('svelte').Snippet<[]>; 
	}

    let { children, class:CLASS, ...props } : Props = $props();
</script>

<footer>
    <p style="z-index: 3;">
        &#169; 2024 Deloitte <a href="/">See Terms of Use </a>for more information.
    </p>
</footer>

<style>

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--D-t-support);
        color: white;
        padding: 1.25em;
        font-size: clamp(0.75em, 0.917rem + 5.1478vw, 1rem);

        
    }

    p {
        background-color: var(--D-t-support);
        color: white;
        padding: 1.25em;
        font-size: 0.75em;
    }

    a {
        color: white;
        text-decoration: underline;
    }
</style>