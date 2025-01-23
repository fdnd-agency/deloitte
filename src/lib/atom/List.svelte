<script>
    /** @type {{number: any, id: any, answer: any, score: any, name: any}} */
    let {
        classStyle,
        children
    } = $props();
</script>

<ul class={classStyle}>
    {@render children?.()}
</ul>

<style>
    ul {
        display: flex;
        list-style-type: "";
        gap: 1rem;
        container-type: inline-size;
        width: 100%;
    }

    .row {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .column {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @container (width < 25rem) {
        .row {
            flex-direction: column;
            
        }
    }
</style>