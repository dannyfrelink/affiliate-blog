/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FFF8F2",
				secondary: "#868198",
				tertair: "#687B68",
				background: "#E8DFD1",
			},
			keyframes: {
				menuFadeIn: {
					"0%": { transform: "translate(-100vw)" },
					"100%": { transform: "translate(0)" },
				},
			},
		},
	},
	plugins: [],
};
