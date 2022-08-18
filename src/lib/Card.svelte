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

<!--* article -->
<article class="card | flow">
	<div class="card__figure">
		<img class="card__img" src={image} {alt} />
	</div>

	<!--* article header -->
	<header class="card__header">
		<slot name="heading" />
	</header>

	<!--* article body -->
	<div class="card__body">
		<slot name="description" />
	</div>

	<!--* article footer -->
	{#if !showShare}
		<footer class="footer">
			<div class="footer__figure">
				<img class="footer__img" src="avatar-{firstName}.jpg" alt="an avatar image of {name}" />
			</div>

			<div class="footer__content">
				<span class="footer__name">{name}</span>
				<Date {date} />
			</div>

			<div class="footer__share" on:click={handleClick}>
				<img src="icon-share.svg" alt="" />
			</div>
		</footer>
	{/if}
	{#if showShare}
		<Share {handleClick} />
	{/if}
</article>

<style>
	.card {
		background-color: white;
		border-radius: theme('borderRadius.xl');
		overflow: hidden;
	}

	.card > :not(:first-child) {
		padding-inline: theme('padding.8');
	}

	.card__header {
		font-weight: bold;
		font-size: theme('fontSize.base');
		color: theme('colors.very-dark-grayish-blue');
		--flow-space: theme('margin.9');
	}

	.card__body {
		--flow-space: theme('margin.4');
		color: theme('colors.desaturated-dark-blue');
	}

	.footer {
		display: flex;
		align-items: center;
		gap: theme('gap.4');
		--flow-space: theme('margin.8');
		min-height: theme('height.16');
		padding-bottom: theme('padding.6');
	}

	.footer__figure {
		max-width: theme('width.10');
		border-radius: theme('borderRadius.full');
		overflow: hidden;
	}

	.footer__share {
		width: theme('width.8');
		display: flex;
		justify-content: center;
		align-items: center;
		aspect-ratio: 1 / 1;
		background-color: theme('colors.light-grayish-blue');
		border-radius: theme('borderRadius.full');
		margin-left: auto;
		cursor: pointer;
	}

	.footer__content > * {
		display: block;
	}

	.footer__name {
		text-transform: capitalize;
		font-weight: bold;
		color: theme('colors.very-dark-grayish-blue');
	}
</style>
