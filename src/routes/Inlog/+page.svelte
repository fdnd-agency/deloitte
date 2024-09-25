<script>
	export let data;
	import '../../styles/inlog.css'
	import '../../styles/global.css'
</script>



<main>
	
	<section class="login-container">
		
		<div class="login-content">
			<h1>Mobility package</h1>
			<img src="P5211348.jpg" alt="background image for the login page" >
		</div>
		
		
		<article >
			<h1>Log-in</h1>
			<p>some extra text</p>
			<div class="space"></div>

			<form action="/profile" method="post">
				<label for="Email">
					<legend>Email</legend>
					<input type="Email" name="Email" id="Email" placeholder="Email">
				</label>

				<label for="Password">
					<legend>Password</legend>
					<input type="Password" name="Password" id="Password" placeholder="Password">
				</label>
				
				<button type="submit">Login</button>

			</form>
			<a href="https://apply.deloitte.com/careers/ResetPassword/?">forgot my Password</a>
		</article>

		

	</section>



</main>