/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
        xs: { "max": "400px" },
        sm: { "max": "1080px" },
        md: { "max": "1440px" },
        lg: { "max": "1920px" },
      },
    extend: {
      colors: {
        // custom colors for the website
        bgColor: "#f0eff1",
        whiteColor: "#fff",
        blackColor: "#24242a",
      },
      fontFamily: {
        // Fonts    [note:write font import link in index.css]
        defaultText: ["Poppins"],
      },
      backgroundImage: {
        // we can use background image via className
        profile: "url('/src/assets/image12.jpg')",
      },
      animation: {
        left: "left 1s ease-in-out forward",
      },
      keyframes: {
        left: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
