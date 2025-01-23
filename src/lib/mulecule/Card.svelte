<script>
    let { jobTitle, title, body, path} = $props();
</script>

<article style="--path: url({path})">
    <div aria-label="card-content">
        <span>{jobTitle}</span>
        <h3>{title}</h3>
        <details>
            <summary>Lees meer</summary>
            <p>{body}</p>
        </details>
    </div>
</article>

<style>
    article {
        --path: "";

        display: flex;
        border-radius: 1rem;
        background-color: var(--background-dark);
        background-image: var(--path);
        background-position: center;
        background-size: cover;
        height: 25rem;
        overflow: hidden;
        box-shadow: 0.1rem 0.1rem 0.5rem var(--background-light);
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        place-self: end;
        width: 100%;
        padding: 1rem;
        background-color: var(--background-light);
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        transition: 0.2s ease-in-out;
    }

    span {
        display: inline-block;
        background-color: var(--background);
        color: var(--text-tertiary);
        border-radius: 1rem;
        padding: 0.5rem 1.5rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h3, p, summary {
        color: var(--text-secondary);
    }

    p {
        font-weight: 300;
        width: 18rem;
    }
</style>