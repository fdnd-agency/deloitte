<script>
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<section>
	{#if data && data.items}
		<ul>
			{#each data.items as item}
				<li>
					<h2>{item.package_name}</h2>
					<img src="" alt=""/>
					<p>{item.description}</p>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	ul {
		width: 100%;
		display: flex;
        flex-wrap: wrap;
		justify-content: center;
		gap: 3%;
		padding-block: 1%;
	}

	li {
		width: 22%;
		height: 50vh;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--D-primary-mid-grey);
		border-radius: 5%;

		& h2 {
			font-weight: bold;
			font-size: 1.25em;
			padding: 1em;
		}

		& img {
			background-color: var(--D-mid-bk);
			width: 85%;
			aspect-ratio: 1;
			object-fit: cover;
			border-radius: 5%;
		}

		& p {
			width: 85%;
			padding: 1em 0;
		}
	}   
</style>
