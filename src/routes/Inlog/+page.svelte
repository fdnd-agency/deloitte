<script>
	import '../../styles/global.css'
	import {ComponentBox, Button} from '$lib';
	import { goto } from '$app/navigation';

</script>

<ComponentBox
		heading=""
		context1=""
		context2=""
		display="flex"
		titleAlign=""
		class="inlog"
		

>
	
	<section class="login-container">
		
		<aside class="login-content noise">
			<!-- <article class="mid  "> -->
				<!-- <div class="noise"></div> -->
   				<!-- <div class="overlay"></div> -->
				
			<!-- </article> -->
		</aside>
		
		
		<article >
			<h1 aria-label="login">Log-in</h1>
			<p>some extra text</p>
			<div class="space"></div>

			<form action="/profile" method="post">
				<label for="Email">
					<input type="Email" name="Email" id="Email" placeholder="Email">
				</label>

				<label for="Password">
					<input type="Password" name="Password" id="Password" placeholder="Password">
				</label>
				
				<!-- <button type="submit" class="nextPage">Login</button> -->
				<!-- <a href="/profile" class="nextPage" data-sveltekit-preload-data="false"> next page</a> -->
				
				<!-- login button -->
				 
				<!-- <Button
				text="login"
				color=""
				colorLine="none"
				task=""
				class="nextPage"
				/> -->


				<Button
				text="next page"
				color=""
				colorLine="none"
				task="/profile"
				class="nextPage"
				
				/>

			</form>
			<a href="https://apply.deloitte.com/careers/ResetPassword/?">forgot my Password</a>
		</article>

		

	</section>



</ComponentBox>

<style>
	section{
	position: relative;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	perspective: 3000px;
	
}

.login-container{
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	border-radius: 2pc 1pc 1pc 2pc;
	perspective: 2000px;
	
	

	&> :nth-child(1){
		max-width: 37vw;
		height:74cqb;
	}

	&> :nth-child(2){
		width: 35vw;
		/* width: 100%; */
		height: 40vw;
		/* height: 70vw; */
		/* background-color:  red; */

		
		
	}



}

/* animation  */

.login-container:hover aside{
	transform: rotateY(20deg) translateX(-3%) scale(.95);
	perspective: 2000px;
	filter:  brightness(1000%);
	filter: blur(50px) contrast(110%);

}


.login-content{
	position: relative;
	overflow: hidden;
	border-radius: clamp(10px, 50vw - 1rem, 2pc);
	transition: 5s cubic-bezier(0.34, -0.04, 0.17, 0.98) ;
	transform-origin: left;

	width: 100%;
}

.login-content .mid {
	width: 100%;
	height: 100%;
	
}

.login-container .login-info-highlight{
	position: absolute;
	inset: 10%;
	top: 40%;
	right: 20%;
	color: #ffffffc6;
	display: none;

}

.login-container > article{
	display: flex;
	flex-direction: column;
	padding: 8%;
	padding-bottom: 0;
	border-radius: 0pc 1pc 1pc 0pc;
	container-type:size ;
	container-name: login;
	text-wrap:stable;
	word-wrap: break-word;
  
	

}

.login-container article h1{
	font-size: 2.5rem;
	margin-bottom: 3%;
	
}

.login-container article .space{
	flex: 1;
}

.login-container article form{
	flex: 0 0 30%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 80%;

	& label{
		margin-bottom: 6%;
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

.isolate {
  isolation: isolate;
  position: relative;
}

.mid{

  width: 100%;
  height: 100%;

  background-image:url("pexels-dan-voican-2624103-17854203.jpg");
  background-repeat:no-repeat;
  background-size:cover;
  
  filter:contrast(0.7);
  mix-blend-mode: luminosity;
  isolation:isolate;
     
  }

  .noise {
  width:100%;
  height:100%;
  
  background: conic-gradient(from 0deg at 80% -39%, var(--D-base-bk) 35%, var(--D-mid-bk) 100%),url(https://grainy-gradients.vercel.app/noise.svg);
  filter: blur(15px) ;
}

</style>