<script>
    /** @type {{number: any, id: any, answer: any, score: any, name: any}} */
    let {
        children
    } = $props();
</script>

<li>
    {@render children?.()}
</li>

<style>
    li {
        width: 25%;
    }
</style>