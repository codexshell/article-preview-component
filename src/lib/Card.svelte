<script>
	import Date from './Date.svelte';
	import Share from './Share.svelte';

	export let image;
	export let name;
	export let alt;
	export let date;

	let showShare = false;

	const handleClick = () => {
		showShare = !showShare;
	};

	// extract first name and use to loading avatar
	let firstName = name.split(' ')[0];
</script>

<article class="card">
	<div class="card__figure">
		<img class="card__img" src={image} {alt} />
	</div>

	<header class="cad__header">
		<slot name="heading" />
	</header>

	<div class="card__body">
		<slot name="description" />
	</div>

	<footer class="footer">
		{#if !showShare}
			<div class="footer__figure">
				<img class="footer__img" src="avatar-{firstName}.jpg" alt="an avatar image of {name}" />
			</div>

			<div class="footer__content">
				<span>{name}</span>
				<Date {date} />
			</div>

			<div class="footer__share" on:click={handleClick}>
				<img src="icon-share.svg" alt="" />
			</div>
		{/if}

		{#if showShare}
			<Share {handleClick} />
		{/if}
	</footer>
</article>
