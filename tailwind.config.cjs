/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
				'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
				'grayish-blue': 'hsl(212, 23%, 69%)',
				'light-grayish-blue': 'hsl(210, 46%, 95%)'
			},
			fontSize: {
				'body-copy': '13px'
			},
			fontFamily: {
				body: ['Manrope', 'sans-serif']
			}
		}
	},
	plugins: []
};
