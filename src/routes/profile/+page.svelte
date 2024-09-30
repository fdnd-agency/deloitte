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


<style>

*{
	/* transition */
	--pageDelay: .5s;
	--pageDuration: .5s;
	--pageTransTiming: linear;
	--pageTrans: var(--pageDuration) var(--pageTransTiming) var(--pageDelay);

	/* outline */
	--Ol-color:var(--D-base-bk);
	--Ol-size:2px;
	--Ol-style:solid;
	--outline: var(--Ol-style) var(--Ol-size) var(--Ol-color); 

	list-style:disc;
}


main{

	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items:center; */

	width: 100%;
	height: 100vh;
	overflow: hidden;
	perspective: 3000px;
	
}	

/* /////////////////////////// */
/* general content container */
/* /////////////////////////// */

.profile-container{
	width:max-content;
	height: fit-content;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	/* background-color: rgba(60, 191, 73, 0.174); */
	/* background-color: rgba(191, 60, 60, 0.174); */
	/* background-color: rgba(130, 172, 194, 0.045); */
	/* background-color:var(--D-primary-mid-grey); */
	/* outline: solid green; */
	border-radius: 2pc 1pc 1pc 2pc;
	perspective: 2000px;
	/* padding-left: 3%; */
	transition: padding-left 1s var(--pageDelay);
	transition: var(--pageTrans);

	@starting-style{
		width: fit-content;
		margin:0;
		padding-left: 7.5vw;
	}
	

	 & > :nth-child(1){
		transition: .9s var(--pageDelay) ;
		width: 28vw;
		height: 100vh;
		transition: height .5s .9s, width var(--pageTrans), border-radius .5s var(--pageDelay);
		border-radius: 0;

		@starting-style{
			width: 50vw;
			height: 90vh;
			max-height: 90vh;
			border-radius: clamp(10px, 50vw - 4rem, 1.8pc);
		}
	}

	 & > :nth-child(2){
		width: 70vw;
		height: 90vh;
		transition: all var(--pageTrans);
		/* flex: 0 0 50vw; */
		/* width: 50vw;
		height: 70vw; */

		@starting-style{
			width: 35vw;
			height: 90vh;
		}
	}

}

/* /////////////////////////// */
/* left side profile container */
/* /////////////////////////// */

.profile-content{
	position: relative;
	overflow: hidden;
	border-radius: clamp(10px, 50vw - 4rem, 1.8pc);
	transition: .8s cubic-bezier(0.34, -0.04, 0.17, 0.98) ;
	transform-origin: left;
	outline: var(--outline);
	background-color: var(--D-light-bk);

}

.profile-content .profile{
	--D-white:rgba(255, 255, 255, 0.396);
	position: absolute;
	inset-block: 5%;
	inset-inline: 10%;
	background-color: var(--D-white);
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: opacity 1s var(--pageDelay);

	@starting-style{
		opacity: 0;
	}

}
.profile-content .profile .user{
	display: flex;
	/* justify-content: space-around; */

	& img{
		width: 100px;
		aspect-ratio: 1;
	}

}

.profile-content > h1{
	font-size: 1.8rem;
	position: relative;
	top: 4%;
	left: 4.5%;
	transition: .8s cubic-bezier(0.34, -0.04, 0.17, 0.98) ;
	mix-blend-mode:difference;
	color: #ffffff91;
	/* filter: blur(10px); */
}

.profile-container img {

	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 100%;
}

/* /////////////////////////// */
/* package selection interface */
/* /////////////////////////// */

.profile-container > article{
	/* outline: .1px solid; */
	/* justify-content: flex-end; */
	background-color: rgba(130, 172, 194, 0.045);
	display: flex;
	flex-direction: column;
	padding-inline: 5%;
	padding-block: 3%;
	margin-left: 1.5%;
	border-radius: clamp(10px, 50vw - 4rem, 1.8pc);
	container-type:size ;
	container-name: login;
	/* padding-bottom: 0; */

}

/* ///////////// */
/* all the rows */
/* ///////////// */

.profile-container article .row{
	--pageDelay:1.5s;
	transition: opacity var(--pageTrans);
	/* outline: solid; */
	/* outline: solid var(--D-base-bk); */
	/* background-color: var(--D-light-bk); */
	/* background-color: rgba(130, 172, 194, 0.045); */

	@starting-style{
		opacity:0;
	}

}

/* //////// */	
/* top row */
/* //////// */

.profile-container > article .row-top{
	flex: 0 0 20vh;
	display: flex;
	flex-direction: row;
	gap: 3%;
}

.row-top :nth-child(n) {
	/* height: 100%; */
	outline: var(--outline);
	background-color: var(--D-light-bk);
	
}

.row-top span:nth-of-type(1){
	flex: 1 1 auto;
	display: grid;
	place-content: center;
	border-radius: .5pc;
}

.row-top span:nth-of-type(1) button{
	width: 40cqw;
	background-color: var(--D-mid-bk);
	border: none;
	border-radius: .5pc;
	padding: 1%;
	font-size: 1.5rem;
	color: var(--D-dark-support);
}

.row-top span:nth-of-type(2){
	flex: 0 1 30%;
	max-height: 20vh;
	border-radius: .5pc;
	padding: 2%;
}

.row-top img{
	width: 100%;
	object-fit: contain;
	object-position: center;
	outline: none !important;
	aspect-ratio: 1;

}

/* //////// */
/* mid row */
/* //////// */

.profile-container{
	position: relative;
}

.package-container article{
	position: relative;
	width: 100%;
	height: 100%;
}

.profile-container > article .row-mid{
	flex:1 0 30vh ;
	width: 40.5vw ;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	background-color: var(--D-mid-bk);
	border-radius: .8pc;
	outline: var(--outline);
	padding: 2%;
}

.row-mid h2{
	font-size: 1.2rem;
}

.row-mid .package-details{
	position: relative;
	height: max-content;
	top: 10%;
	/* left: 50%; */
	/* transform: translate(-50%, -50%); */
	background-color: var(--D-light-bk);
	border-radius: .5pc;
	padding: 2%;

}

/* /////////// */
/* down row */
/* /////////// */

.profile-container article .row-down{
	flex: 0 0 10vh;
	outline: var(--outline);
	background-color: var(--D-light-bk);
	border-radius: .5pc;
	padding: 2%;

}

.profile-container article h1{
	font-size: 2.5rem;
	margin-bottom: 3%;
}
</style>