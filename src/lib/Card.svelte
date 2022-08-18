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
	}

	const handleKey = (e) => {
		if (e) {
			if (e.key === 'Enter') {
				showShare = !showShare;
			}
		}
		// showShare = !showShare;
	};

	// extract first name and use to loading avatar
	let firstName = name.split(' ')[0];
</script>

<!--* article -->
<article class="card | flow">
	<div class="card__figure">
		<img class="card__img" src={image} {alt} />
	</div>

	<div class="container | flow | relative">
		<div class="wrapper | flow">
			<!--* article header -->
			<header class="card__header">
				<slot name="heading" />
			</header>

			<!--* article body -->
			<div class="card__body">
				<slot name="description" />
			</div>
		</div>

		<!--* article footer -->
		<footer class="footer">
			<div class="footer__figure">
				<img class="footer__img" src="avatar-{firstName}.jpg" alt="an avatar image of {name}" />
			</div>

			<div class="footer__content">
				<span class="footer__name">{name}</span>
				<Date {date} />
			</div>

			<div tabindex="0" class:share={showShare}  class="footer__share" on:keydown="{handleKey}" on:click={handleClick}>
				<img class:shareIcon={showShare} src="icon-share.svg" alt="" />
			</div>
		</footer>
		{#if showShare}
			<Share {handleClick} />
		{/if}
	</div>
</article>

<style>
	.card {
		background-color: white;
		border-radius: theme('borderRadius.lg');
		filter: drop-shadow(0 1rem 0.75rem rgba(0, 0, 0, 0.2));
		min-height: 18.75rem;
		overflow: hidden;
		max-width: 20.45rem;
	}

	@media (min-width: theme('screens.lg')) {
		.card {
			max-width: 45.5rem;
			display: flex;
			overflow: visible;
		}
	}

	@media (min-width: theme('screens.lg')) {
		.card__figure {
			border-top-left-radius: theme('borderRadius.lg');
			border-bottom-left-radius: theme('borderRadius.lg');
			overflow: hidden;
		}
	}

	@media (min-width: theme('screens.lg')) {
		.card__figure {
			flex-basis: 40%;
		}

		.card__img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top 0 left 0;
		}
	}

	.container {
		--flow-space: theme('margin.9');
		min-height: 16.5rem;
	}

	@media (min-width: theme('screens.lg')) {
		.container {
			flex-basis: 60%;
			padding-inline: theme('padding.2');
		}
	}

	.wrapper {
		padding-inline: theme('padding.8');
	}

	.card__header {
		font-weight: bold;
		font-size: theme('fontSize.base');
		color: theme('colors.very-dark-grayish-blue');
	}

	@media (min-width: theme('screens.lg')) {
		.card__header {
			font-size: theme('fontSize.lg');
		}
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
		padding-inline: theme('padding.8');
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

	.share {
		background-color: theme('colors.desaturated-dark-blue');
	}

	.shareIcon {
		filter: brightness(2.3);
	}
</style>
