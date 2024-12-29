<script>
    /** @type {{question: any, children?: import('svelte').Snippet}} */
    let { question, children } = $props();
</script>

<fieldset>
    <div>
        <legend>{question}</legend>
        <p>Kies 1 van de onderste opties</p>
    </div>
    <ul>
        {@render children?.()}
    </ul>
</fieldset>

<style>
    fieldset {
        border: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        transition: 0.2s ease-in;
        z-index: 5;
    }

    fieldset:disabled {
        /* pointer-events: none; */
        animation: shake 1.5s infinite;
        cursor: not-allowed;
    }

    div {
        background-image: linear-gradient(90deg, #520617, #a91031);
        border-radius: 1rem;
        padding: 1rem;
        box-shadow: 0 0.15rem 1rem #520617;
    }

    fieldset:disabled div {
        background-image: linear-gradient(90deg, #99f5ff, #0f587d, #99f5ff);
        border-top: 0.15rem solid white;
        border-bottom: 0.15rem solid #0f587d;
        box-shadow: 0 0.15rem 1rem #0f587d;
        position: relative;
        overflow: hidden;
    }

    fieldset:disabled div::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgb(255, 255, 255, 0.2);
        width: 5rem;
        height: 100%;
        transform: skew(20deg);
        animation: shine 2.5s infinite;
    }

    fieldset:disabled div::after {
        content: "";
        background-image: url("cracks.png");
        background-position: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        mix-blend-mode: multiply;
    }

    legend {
        font-size: 1.2rem;
        color: var(--text-secondary);
        font-weight: 700;
        width: 100%;
    }

    p {
        color: var(--text-secondary);
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

    .unlock {
        animation: unlock 6s ease-out;
    }

    @keyframes unlock {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(2);
        }
    }

    @keyframes shine {
        from {
            left: 0;
        }
        to {
            left: 100%;
        }
    }

    @keyframes shake {
        0% {
            transform: rotate(0);
        }
        30% {
            transform: rotate(0.5deg);
        }
        60% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-0.5deg);
        }
    }

    @media only screen and (min-width: 48rem) {
        ul {
            flex-direction: row;
            align-items: center;
        }
    }
</style>