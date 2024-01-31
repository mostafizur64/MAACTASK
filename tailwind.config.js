/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headingColor: "#0B141F",
        titleColor: "#0052CC",
        paragraphColor: "#4E4E4E",
        subTitleColor: "#FFF",
      },
    },
  },
  plugins: [],
};
