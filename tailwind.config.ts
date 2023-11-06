import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#13294B",
        secondary: "#E84A27",
        "illini-blue": "#13294B",
        "illini-orange": "#E84A27",
        "illini-cloud": "#F8FAFC",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

export default config;
