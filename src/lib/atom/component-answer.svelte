<script>
    // let { number, id, answer } = $props();
    /** @type {{number: any, id: any, answer: any, score: any, name: any}} */
    let {
        number,
        id,
        answer,
        score,
        name
    } = $props();
</script>

<li>
    <input type="radio" name={name} id={id} value={score}>
    <label for={id}>{answer}</label>
    <p>{number}</p>
</li>

<style>
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10rem;
        position: relative;
        text-align: center;
    }

    p {
        position: absolute;
        top: 1rem;
        left: 1rem;
        color: var(--text-secondary);
        background-color: var(--background-dark);
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        z-index: 1;
    }

    label {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text-primary);
        background-color: var(--background);
        border: 0.1rem solid var(--border);
        border-radius: 0.5rem;
        padding: 1rem;
        cursor: pointer;
        transition: 0.2s ease-in;
    }

    label:hover {
        background-color: var(--background-light);
    }

    input {
        z-index: -1;
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    input:checked + label {
        color: var(--text-secondary);
        background-color: var(--background-dark);
        border: 0.1rem solid var(--background-dark);
    }

    input:checked ~ p {
        background-color: var(--background);
    }

    input:focus + label {
        outline: 0.2rem solid var(--border);
    }

    @media only screen and (min-width: 48rem) {
        li {
            width: 25%;
        }
    }
</style>