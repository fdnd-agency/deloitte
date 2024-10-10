<script>
	export let data;
	
</script>

<section>
	{#if data && data.items}
		<ul>
			{#each data.items as item}
				<li>
					<h2>{item.package_name}</h2>
					<img src="../freakbob-calling.webp" alt="freakbob"/>
					<p>{item.description}</p>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	ul {
		width: 100vw;
		display: flex;
        flex-wrap: wrap;
		justify-content: center;
		gap: 1em;
	}

	li {
		width: 20em;
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
			width: 15em;
			height: 15em;
			object-fit: cover;
			border-radius: 5%;
		}

		& p {
			width: 15em;
			padding: 1em 0;
		}
	}   
</style>
