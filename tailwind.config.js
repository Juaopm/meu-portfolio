/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0b0914",
          800: "#13111c",
          700: "#1e1a2e",
        },
        brand: {
          purple: "#8b5cf6",
          light: "#a78bfa",
          dark: "#6d28d9",
        },
      },
    },
  },
  plugins: [],
};
