const daisyui = require('daisyui')
const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null,
					},
				},
			},
		},
	},

	daisyui: {
		themes: ['corporate'],
	},

	plugins: [typography, daisyui],
}

module.exports = config
