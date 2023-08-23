/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        clamp: "clamp(300px, 60vw, 500px)",
      },
    },
  },
  plugins: [],
};

