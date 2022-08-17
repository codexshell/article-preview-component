<script>
	import Card from '../lib/Card.svelte';
</script>

<svelte:head>
	<title>Frontend Mentor | Article preview component</title>
</svelte:head>

<section>
	<Card
		name="michelle appleton"
		image="drawers.jpg"
		alt="a flower vase on top of a green drawer"
		date="2020-06-28"
	>
		<h2 slot="heading">
			Shift the overall look and feel by adding these wonderful touches to furniture in your home.
		</h2>
		<p slot="description">
			Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and
			uninviting. I've got some simple tips to help you make any room feel complete.
		</p>
	</Card>
</section>
