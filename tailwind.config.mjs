const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    flowbite.content()
  ],
	theme: {
		extend: {
      colors: {
        primary: "#1161AC",
        secondary: "#FE6500"
      }
    },
	},
	plugins: [
    flowbite.plugin()
  ],
}
