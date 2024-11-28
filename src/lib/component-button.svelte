<script>
    export let type;
    export let text;
</script>

<button type={type}>{text}</button>

<style>
    button {
        display: inline-block;
        background-color: var(--background-dark);
        border: 0.1rem solid var(--border);
        color: var(--text-secondary);
        border-radius: 1rem;
        padding: 0.5rem;
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--background);
        color: var(--text-tertiary);
    }
</style>