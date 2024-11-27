<script>
    /** @type {{answer: any, bindGroup: any}} */
    let { answer, bindGroup = $bindable() } = $props();
</script>

<label>
    <input type="radio" name="answer" value={answer.score} bind:group={bindGroup}>
    {answer.answer}
</label>

<style>
    label {
        background-color: var(--D-base-bk);
        border-radius: 1rem;
        border: 0.17rem solid var(--D-mid-bk);
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        cursor: pointer;
    }

    label:hover{
        background-color: var(--D-t-support);
        border: 0.1rem solid var(--D-t-support);
        /* font-weight: 600; */
        color: var(--D-white);
        transition: 2s transform ease-in-out;
    }

    input[type="radio"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: var(--D-white);
        margin: 0 0.5rem 0 0;
        font: inherit;
        color: var(--D-mid-bk);
        width: 1.15rem;
        height: 1.15rem;
        border: 0.15rem solid var(--D-mid-bk);
        border-radius: 50%;
        display: grid;
        place-content: center;
    }

    input[type="radio"]::before {
        content: "";
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1rem 1rem var(--D-dark-support);
    }

    input[type="radio"]:checked::before {
    transform: scale(1);
    }




    label:has(input[type="radio"]:checked)  {
        background-color: var(--D-dark-support);
        color: var(--D-white);
    }

    label:has(input[type="radio"]:focus-visible)  {
        background-color: var(--D-dark-support);
        outline: solid;
        color: var(--D-white);
    }


</style>
