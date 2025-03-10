/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        accent: "#AB8BFF",
        light: {
          100: "#D6C6FF",
          200: "#A8bfdb",
          300: "#9ca4db",

        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",

        },
        background: "#F5F5F5",
        text: "#333333",
      },
    },
  },
  plugins: [],
}
