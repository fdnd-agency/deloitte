<script>
    export let answer; // Het antwoord object dat je doorgeeft
    export let bindGroup; // Voor het binden van de groep aan het antwoord
</script>

<label>
    <input type="radio" name="answer" value={answer.score} bind:group={bindGroup}>
    {answer.answer}
</label>

<style>
    label {
        background-color: var(--D-base-bk);
        border-radius: 1rem;
        border: 0.1rem solid var(--D-mid-bk);
        display: block;
        padding: 0.5rem;
        cursor: pointer;
    }

    label:hover{
        background-color: var(--D-t-support);
        font-weight: 600;
    }

    input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 1rem;
    padding: 0.1rem;
    border: 0.1rem solid var(--D-mid-bk);
    border-radius: 0.5rem;
    }

    input[type="radio"]::before {
    content: "";
    width: 1rem;
    height: 1rem;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    transform: scale(0);
    background-color: var(--D-mid-bk);
    }

    input[type="radio"]:checked::before {
    transform: scale(1);
    }
</style>
