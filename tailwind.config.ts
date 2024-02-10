import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        inter: ["Inter"],
      },
      boxShadow: {
        card: "8px 8px 0px 0px rgba(0, 0, 0, 1)",
      },
      colors: {
        appBackground: "#FEF9E6",
        borderBlack: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
