<script>
        let { children, class:CLASS, ...props } = $props();

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
        font-size: 0.75em;

        
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