<script>
	export let date;

	const formatter = Intl.DateTimeFormat('en-US', {
		dateStyle: 'medium'
	});

	let newDate = formatter.format(new Date(date));

	// remove comma from newDate
	newDate = newDate.replace(/,/, '');

	// convert date to array using space as delimeter
	newDate = newDate.split(' ');

	// rearrage date components
	newDate = [newDate[1], newDate[0], newDate[2]];

	// join the array elements back together removing the delimeter
	newDate = newDate.join(' ');
</script>

<time datetime={date}>{newDate}</time>

<style>
	time {
		color: theme('colors.grayish-blue');
	}
</style>
