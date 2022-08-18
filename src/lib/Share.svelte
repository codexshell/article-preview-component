<script>
	import { fade } from 'svelte/transition';

	export let handleClick;
</script>

<footer transition:fade class="share | bg-very-dark-grayish-blue">
	<span class="share__heading">share</span>
	<div class="share__content">
		<div class="share__icon"><img src="icon-facebook.svg" alt="" /></div>
		<div class="share__icon"><img src="icon-twitter.svg" alt="" /></div>
		<div class="share__icon"><img src="icon-pinterest.svg" alt="" /></div>
	</div>
	<div on:click={handleClick} class="share__figure">
		<img class="share__img" src="icon-share.svg" alt="" />
	</div>
</footer>

<style>
	.share {
		margin-top: theme('margin.8');
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-inline: theme('padding.8');
		min-height: theme('height.16');
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	@media (min-width: theme('screens.lg')) {
		.share {
			inset: unset;
			right: -4.35rem;
			bottom: 6.5rem;
			border-radius: theme('borderRadius.lg');
			gap: 1.5rem;
		}

		.share::after {
			content: '';
			width: 1.25rem;
			aspect-ratio: 1 / 1;
			background-color: theme('colors.very-dark-grayish-blue');
			position: absolute;
			bottom: -0.6rem;
			left: 50%;
			transform: translateX(-50%) rotate(45deg);
		}
	}

	.share__heading {
		color: theme('colors.grayish-blue');
		text-transform: uppercase;
		letter-spacing: 0.35rem;
	}

	.share__content {
		display: flex;
		gap: 1rem;
	}

	.share__figure {
		width: theme('width.8');
		display: flex;
		justify-content: center;
		align-items: center;
		aspect-ratio: 1 / 1;
		margin-left: auto;
		background-color: theme('colors.desaturated-dark-blue');
		border-radius: theme('borderRadius.full');
		cursor: pointer;
	}

	@media (min-width: theme('screens.lg')) {
		.share__figure {
			display: none;
		}
	}

	.share__icon {
		cursor: pointer;
	}

	.share__img {
		filter: brightness(2.3);
	}
</style>
