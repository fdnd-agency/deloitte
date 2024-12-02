<script>
    /** @type {{question: any, children?: import('svelte').Snippet}} */
    let { question, children } = $props();
</script>

<fieldset>
    <legend>{question}</legend>
    <p>Kies 1 van de onderste opties</p>
    <ul>
        {@render children?.()}
    </ul>
</fieldset>

<style>
    fieldset {
        border: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        transition: 0.2s ease-in;
    }

    fieldset:disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    legend {
        font-size: 1.2rem;
        color: var(--text-primary);
        font-weight: 700;
    }

    p {
        color: var(--text-primary);
        font-weight: 300;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        list-style-type: "";
        gap: 1rem;
    }

    @media only screen and (min-width: 48rem) {
        ul {
            flex-direction: row;
            align-items: center;
        }
    }
</style>