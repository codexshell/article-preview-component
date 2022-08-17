<script>
  export let handleClick;
</script>

<div class="share | bg-very-dark-grayish-blue">
	<span class="share__heading">share</span>
	<div class="share__content">
		<div class="share__icon"><img src="icon-facebook.svg" alt="" /></div>
		<div class="share__icon"><img src="icon-twitter.svg" alt="" /></div>
		<div class="share__icon"><img src="icon-pinterest.svg" alt="" /></div>
	</div>
	<div on:click="{handleClick}" class="share__figure"><img src="icon-share.svg" alt="" /></div>
</div>
