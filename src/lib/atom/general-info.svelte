<script>
    // export let data;
    /** @type {{num: any}} */
    let { num } = $props();
</script>

<section>
    <h2>General information</h2>
    <article>
        <h3>Business OV card</h3>
        <blockquote>Everyone receives a "Business OV Card" for travel. The cost is deducted from the salary before tax, making travel more economical.</blockquote>
    </article>
    <article>
        <h3>Deloitte Bike System</h3>
        <blockquote>Employees can lease a bike for a monthly fee.</blockquote>
    </article>
    <article>
        <h3>Bike Purchase</h3>
        <blockquote>Employees can purchase a bike from their salary with tax benefits</blockquote>
    </article>
    <article>
        <h3>Additional Features</h3>
        <blockquote>The Business OV Card can also be used for renting bikes or cars when needed.</blockquote>
    </article>
</section>

<style>
    @keyframes pageLoadAnimation {
        0% {
            transform: translateX(10%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 100%;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: 1s cubic-bezier(0.34, -0.04, 0.17, 0.98) pageLoadAnimation;

        & h2 {
            padding: 0.5em 0;
        }

        & h3 {
            text-align: center;
            padding: 0.5em 0;
        }

        & blockquote {
            padding: 0 0 1em 0;
        } 
    }
</style>