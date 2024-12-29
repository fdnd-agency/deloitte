<script>
    /** @type {{subtitle: any, title: any, body: any, children?: import('svelte').Snippet}} */
    let {
        subtitle,
        title,
        body,
        children
    } = $props();
</script>

<section>
    <p>{subtitle}</p>
    <h2>{title}</h2>
    <p>{body}</p>
    {@render children?.()}
</section>

<style>
    section {
        color: var(--text-secondary);
        font-weight: 300;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
    }

    p:nth-of-type(1) {
        background-image: linear-gradient(90deg, var(--text-tertiary), var(--text-fourth));
        background-clip: text;
        color: transparent;
        font-weight: 500;
    }

    p:nth-of-type(2) {
        border-bottom: 0.1rem solid var(--border);
        margin-bottom: 2rem;
    }
</style>