<script>
	import '../app.css';
</script>

<main class="text-body-copy bg-light-grayish-blue | h-screen w-screen grid place-content-center p-6 overflow-auto">
	<slot />
</main>

<style>
	:global(body) {
		font-family: theme("fontFamily.body");
	}
</style>
