<script>
	// export let data;
	// import '../../styles/profile.css'
	import '../../styles/global.css'
	// import { error } from './+error.svelte';
	// import { page } from '$app/stores';

	let score = 0;

	$: score = 2;
	

</script>


<main>
	
	<section class="profile-container">
		
		<aside class="profile-content">
			<div class="profile">
				<!-- <h1>Mobility package</h1> -->
				<div class="user">
					<img src="/0555536218e3dee039bb8897a912aa4c.jpg" alt="">
					<span>name emploee</span>
				</div>
				<ul class="user-info">
					<li>job-title</li>
					<li>work land & location</li>
					<li>role</li>
					<li>team</li>
					<li>department</li>
					<li>contract start date</li>
					<li>contract end date</li>
					<li>disability benefits

						<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-point"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /></svg>
					</li>
					<li>adress</li>
					<li> IT contact</li>
				</ul>
				<input type="number" bind:value={score} placeholder="choose package">

				<a href="/Inlog" data-sveltekit-preload-data="false">sign-out</a>
					<!-- data-sveltekit-preload-data=false helps with preventing unecesary page load -->

			</div>
			<!-- <img src="pexels-dan-voican-2624103-17854203.jpg" alt="background for the login page" > -->

		</aside>
		
		{#if score === 1}
			<article >

			<row class="row row-top">

				<span>Mobility+ {score}</span>
				<span> 
					<img src="VanMoof_S3_dark (1).png" alt="bike image">
				</span>
			</row>
			<br>
			<row class="row row-mid">

				<h2>Mobility+</h2>
				<h2>Package description: This package is designed for individuals who require assistance with mobility. It includes a
						range of services to help you move around the city, including transportation, parking, and public transportation.
						It also includes a range of services to help you manage your finances, including budgeting, savings, and
						investments.</h2>
				
				<div class="package-details">
					
					<p>Package price: $1000</p>
					<p>Package duration: 1 month</p>
					<p>vehicle type: electric bike</p>
					<p>vehicle purchase: 10000</p>
					<p>how many miles per year: 10000</p>
				</div>
			</row>
			<br>
			<row class="row row-down">
				<h2>tools</h2>
				<nav>
					<span>settings</span>
					<span>faq</span>
					<span>overzicht</span>
				</nav>
			</row>


		 </article>
		{:else if score === 2}
			<article >

			<row class="row row-top">

				<span>Cash</span>
				<!-- <span> package content</span> -->
			</row>
			<br>
			<row class="row row-mid">

				<h2>Cash</h2>
				<h2>Package description: This package is designed for individuals who require assistance with mobility. It includes a
					range of services to help you move around the city, including transportation, parking, and public transportation.
					It also includes a range of services to help you manage your finances, including budgeting, savings, and
					investments.
				</h2>
				
				<div class="package-details">
					<p>monthly amount: $1000</p>
					<p>Package duration: 1 month</p>

				</div>
			</row>
			<br>
			<row class="row row-down">
				<h2>tools</h2>
				<nav>
					<span>settings</span>
					<span>faq</span>
					<span>overzicht</span>
				</nav>
			</row>


			</article>
		{:else if score === 3}
		 <article >

			<row class="row row-top">

				<span>Unlimited Public Transport</span>
				<span> OV</span>
			</row>
			<br>
			<row class="row row-mid">

				<h2>Public Transport</h2>
				<h2>Package description: This package is designed for individuals who require assistance with mobility. It includes a
					range of services to help you move around the city, including transportation, parking, and public transportation.
					It also includes a range of services to help you manage your finances, including budgeting, savings, and
					investments.
				</h2>
				
				<div class="package-details">
					<p>monthly amount: $1000</p>
					<p>Package duration: 1 month</p>
				</div>
			</row>
			<br>
			<row class="row row-down">
				<h2>tools</h2>
				<nav>
					<span>settings</span>
					<span>faq</span>
					<span>overzicht</span>
				</nav>
			</row>


		 </article>
		{:else if score === 4}
		 <article >

			<row class="row row-top">

				<span>Lease car</span>
				<span> 
					<!-- <img src="62112c9b15fb4bf9e38567d6e436b2dd-tesla-car-svg.webp" alt="car image"> -->
					<img src="tesla_car_PNG46.png" alt="tesla">
					<!-- <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
						Car body
						<path d="M20,70 Q50,90 100,90 Q150,90 180,70 Q190,60 190,50 Q190,40 180,30 Q150,10 100,10 Q50,10 20,30 Q10,40 10,50 Q10,60 20,70 Z" fill="#cc0000"/>
						Wheels
						<circle cx="50" cy="80" r="15" fill="#333"/>
						<circle cx="150" cy="80" r="15" fill="#333"/>
						Windows
						<path d="M40,40 Q70,30 100,30 Q130,30 160,40 Q140,20 100,20 Q60,20 40,40 Z" fill="#87CEFA"/>
						Tesla logo
						<text x="90" y="60" font-family="Arial" font-size="20" fill="white">T</text>
					</svg>					 -->
				</span>
			</row>
			<br>
			<row class="row row-mid">

				<h2>Package name: Lease car</h2>
				<h2>Package description: This package is designed for individuals who require assistance with mobility. It includes a
						range of services to help you move around the city, including transportation, parking, and public transportation.
						It also includes a range of services to help you manage your finances, including budgeting, savings, and
						investments.</h2>
				
				<div class="package-details">
					<p>Package price: $1000</p>
					<p>Package duration: 1 month</p>
					<p>Package services: 1 month</p>
					<p>how many miles per year: 10000</p>
				</div>
			</row>
			<br>
			<row class="row row-down">
				<h2>tools</h2>
				<nav>
					<span>settings</span>
					<span>faq</span>
					<span>overzicht</span>
				</nav>
			</row>


		 	</article>
		{:else if score === 5}
		{error}
		{:else}
		 <article >

			<row class="row row-top">

				<span><button>choose package</button></span>
				<!-- <span> package content</span> -->
			</row>
			<br>
			<row class="row row-mid">

				<h2>Package details</h2>
				<h2>These packages are designed for individuals who require assistance with mobility. It includes a
					range of services to help you move around the city, including transportation, parking, and public transportation.
					It also includes a range of services to help you manage your finances, including budgeting, savings, and
					investments.</h2>
				
				<div class="package-details">
					<h2>Mobility package </h2>
					<p>Package duration: 1 month</p>
				</div>
			</row>
			<br>
			<row class="row row-down">
				<h2>tools</h2>
				<nav>
					<span>settings</span>
					<span>faq</span>
					<span>overzicht</span>
				</nav>
			</row>


		 </article>
		{/if}


	</section>



</main>

