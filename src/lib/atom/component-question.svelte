<script>
    /** @type {{question: any, children?: import('svelte').Snippet}} */
    let { question, questionNumber, children } = $props();
</script>

<fieldset style="view-transition-name: question-{questionNumber}">
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
        view-transition-class: question;
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

    @keyframes slide-in-left {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slide-out-right {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    ::view-transition-group(*question) {
        ::view-transition-old(*question) {
            animation: slide-out-right 0.5s ease-in-out;
        }

        ::view-transition-new(*question) {
            animation: slide-in-left 0.5s ease-in-out;
        }
    }

    @media only screen and (min-width: 48rem) {
        ul {
            flex-direction: row;
            align-items: center;
        }
    }
</style>