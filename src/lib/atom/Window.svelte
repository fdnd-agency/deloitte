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
    <article>
        <h1>{title}</h1>
        <p>{body}</p>
        {@render children?.()}
    </article>
</section>

<style>
    section {
        border-radius: 1rem;
        background-color: var(--background-dark);
        background-image: url("/images/deloitte.jpg");
        background-position: center;
        background-size: cover;
        overflow: hidden;
        height: 15rem;
    }

    article {
        display: inline-block;
        background-color: var(--background-light);
        padding: 1rem;
        border-top-right-radius: 5rem;
        border-bottom-right-radius: 5rem;
        width: 50%;
        height: 100%;
        backdrop-filter: blur(0.25rem);
    }

    h1 {
        font-size: 2rem;
    }

    h1, p {
        color: var(--text-secondary);
    }
</style>