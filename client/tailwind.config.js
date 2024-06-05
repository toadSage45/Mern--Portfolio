/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         "primary" : "#2218A7",
         "secondary" : "#737CCF",
        "tertiary" : "#BBC4EB",
      "lastly" : "#EBE8F5",
    "fourthly" : "#E1E5F8"}
    },
  },
  plugins: [],
}