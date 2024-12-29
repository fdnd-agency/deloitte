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
        background-color: #a91031;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        z-index: 2;
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
        color: var(--text-secondary);
        background-image: linear-gradient(90deg, #520617, #a91031);
        border-radius: 0.5rem;
        padding: 1rem;
        cursor: pointer;
        transition: 0.2s ease-in;
        box-shadow: 0 0.15rem 1rem #520617;
    }

    label:hover {
        background-image: linear-gradient(90deg, #ddcbcf, #ffffff);
        color: var(--text-primary);
        animation: pop 2.5s infinite;
        z-index: 2;
    }

    input {
        z-index: -1;
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    input:checked + label {
        color: var(--text-primary);
        background-image: linear-gradient(90deg, #ddcbcf, #ffffff);
    }

    input:checked ~ p {
        background-color: #a91031;
    }

    input:focus + label {
        outline: 0.15rem solid white;
    }

    input:disabled + label {
        background-image: linear-gradient(90deg, #99f5ff, #0f587d, #99f5ff);
        border-top: 0.15rem solid white;
        border-bottom: 0.15rem solid #0f587d;
        box-shadow: 0 0.15rem 1rem #0f587d;
        overflow: hidden;
        cursor: not-allowed;
        pointer-events: none;
    }

    input:disabled + label::before {
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

    input:disabled + label::after {
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

    input:disabled ~ p {
        color: var(--text-primary);
        background-color: white;
    }

    @keyframes shine {
        from {
            left: 0;
        }
        to {
            left: 100%;
        }
    }

    @keyframes pop {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.1);
        }
    }

    @media only screen and (min-width: 48rem) {
        li {
            width: 25%;
        }
    }
</style>