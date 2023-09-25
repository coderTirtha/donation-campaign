/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(210,210,210,0.85), rgba(209,209,209,0.9)), url('https://i.ibb.co/Q706MQc/Clothing.png')",
     }
    },
  },
  plugins: [require("daisyui")],
}