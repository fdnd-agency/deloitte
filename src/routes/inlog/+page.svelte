<script>
	// export let data;
	// import '../../styles/inlog.css'
	import '../../styles/global.css'

</script>


<svelte:head>
	<title>
		Mobility package login
	</title>
		<link rel="preload" href="pexels-dan-voican-2624103-17854203.jpg" as="image">
</svelte:head>

<main>
	
	<section class="login-container">
		
		<aside class="login-content">
			<h1>Mobility package</h1>
			<img src="pexels-dan-voican-2624103-17854203.jpg" >
		</aside>
		
		
		<article >
			<h1 aria-label="login">Log-in</h1>
			<p>some extra text</p>
			<div class="space"></div>

			<form action="/profile" method="post">
				<label for="Email">
					<h1>Email</h1>
					<input type="Email" name="Email" id="Email" placeholder="Email">
				</label>

				<label for="Password">
					<h1>Password</h1>
					<input type="Password" name="Password" id="Password" placeholder="Password">
				</label>
				
				<button type="submit" class="nextPage">Login</button>
				<a href="/profile" class="nextPage" data-sveltekit-preload-data="false"> next page</a>

			</form>
			<a href="https://apply.deloitte.com/careers/ResetPassword/?">forgot my Password</a>
		</article>

		

	</section>



</main>

<style>
	main{
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	perspective: 3000px;
}

.login-container{
	width: fit-content;
	height: fit-content;
	display: flex;
	align-items: center;
	/* background-color: rgba(186, 188, 189, 0.174); */
	/* background-color: rgba(130, 172, 194, 0.045); */
	/* background-color:var(--D-primary-mid-grey); */
	border-radius: 2pc 1pc 1pc 2pc;
	perspective: 2000px;
	

	&> :nth-child(1){
		width: 50vw;
		height: 90vh;
		max-height: 90vh;
	}

	&> :nth-child(2){
		width: 35vw;
		height: 40vw;
		/* width: 50vw;
		height: 70vw; */
	}



}

/* animation  */

/* main:has(.login-container:hover) .login-content{
	transform: rotateY(20deg) translateX(-3%) scale(.95);
	perspective: 2000px;
	h1{
		 transform: rotateY(-10deg) translateX(-3%) scale(1.07);
		 transform-origin:left ;

	}
} */


.login-content{
	position: relative;
	overflow: hidden;
	border-radius: clamp(10px, 50vw - 1rem, 2pc);
	transition: .8s ;
	transition: .8s cubic-bezier(0.34, -0.04, 0.17, 0.98) ;
	transform-origin: left;
}

.login-content > h1{
	font-size: 1.8rem;
	position: absolute;
	top: 4%;
	left: 4.5%;
	transition: .8s cubic-bezier(0.34, -0.04, 0.17, 0.98) ;
	mix-blend-mode:difference;
	color: #ffffff91;
	/* filter: blur(10px); */
}

.login-container img {

	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 100%;
}

.login-container .login-info-highlight{
	position: absolute;
	inset: 10%;
	top: 40%;
	right: 20%;
	color: #ffffffc6;
	/* height: fit-content; */
	/* backdrop-filter: blur(3px); */
	display: none;

}

.login-container > article{
	/* outline: .1px solid; */
	/* justify-content: flex-end; */
	/* background-color: rgba(186, 188, 189, 0.174); */
	display: flex;
	flex-direction: column;
	padding: 8%;
	padding-bottom: 0;
	border-radius: 0pc 1pc 1pc 0pc;
	container-type:size ;
	container-name: login;

}

.login-container article h1{
	font-size: 2.5rem;
	margin-bottom: 3%;
}

.login-container article .space{
	flex: 1;
}

.login-container article form{
	/* justify-self:baseline; */
	/* float: block-end; */
	/* outline: solid; */
	flex: 0 0 30%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 80%;

	& label{
		margin-bottom: 6%;
		/* background-color: red; */
	}

	& h1{
		margin-bottom: 2%;
		display: none;
	
	}

	& input{
		width: 100%;
		border: none;
		border-radius: 0;
		outline: none;
		border-bottom: solid 1px;
		background: transparent;
	}

	& input:focus-visible{
		outline: solid  var(--D-mid-bk);
		outline-style: dashed;
		outline-offset: 10px;
		border-radius: 1pc;
		
	}

	& .nextPage{
		width: 100%;
		height: 7cqh;
		margin-bottom: 10%;
		color: white;
		background-color: var(--black);
		border-radius:.8pc;
		border: none;
		display: grid;
		place-content: center;

		&:focus-visible,:focus-within{
			background-color: var(--D-mid-bk);
			outline-style: dashed;
			color: var(--D-black);
		}
	}
}

.login-container article > a{
	
		color: var(--D-black);
		text-decoration: none;
		border-radius:.8pc;
		width: fit-content;
		&::first-letter{
			text-transform: uppercase;
		}

		&:focus-visible,:active{
			outline: solid var(--D-mid-bk);
			color: var(--D-black);
			background-color: var(--D-base-bk);
		}
		
	
}



</style>