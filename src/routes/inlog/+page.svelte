<script>
	export let data;
	import '../../styles/inlog.css'
	import '../../styles/global.css'
</script>

<main>
	
	<section class="login-container">
		
		<div class="login-content">
			<h1>Mobility package</h1>

			<div class="login-info-highlight">
				<h1>Deloitte</h1>
				<p>Deloitte is a global professional services firm that provides a wide range of services to clients in the private and public sectors. Our services include consulting, project management, risk management, and more. We work with clients to help them achieve their business goals and objectives.</p>
				<p>Deloitte is a global professional services firm that provides a wide range of services to clients in the private and public sectors. Our services include consulting, project management, risk management, and more. We work with clients to help them achieve their business goals and objectives.</p>
				<p>Deloitte is a global professional services firm that provides a wide range of services to clients in the private and public sectors. Our services include consulting, project management, risk management, and more. We work with clients to help them achieve their business goals and objectives.</p>
			</div>
			<img src="pexels-dan-voican-2624103-17854203.jpg" alt="background image for the login page" >
		</div>
		
		
		<article >
			<h1 aria-label="login">Log-in</h1>
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