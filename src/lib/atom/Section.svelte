<script>
    /** @type {{number: any, id: any, answer: any, score: any, name: any}} */
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
        width: 100%;
        border-top: 0.1rem solid var(--background-light);
        margin-bottom: 2.5rem;
    }

    p:nth-child(1) {
        color: var(--text-tertiary);
        margin-top: 2.5rem;
    }

    h2 {
        font-size: 1.75rem;
        color: var(--text-primary);
    }

    p:nth-of-type(2) {
        color: var(--text-primary);
        font-weight: 300;
        margin-bottom: 1rem;
    }
</style>