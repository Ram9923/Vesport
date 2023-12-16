/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "third-color": "#f0f8f4",
        white: "#fff",
        black: "#000",
        "dark-blue": "#061b31",
        deepskyblue: "rgba(64, 173, 212, 0.75)",
      },
      spacing: {},
      fontFamily: {
        philosopher: "Philosopher",
      },
      borderRadius: {
        "3xs": "10px",
        "11xl": "30px",
        "51xl": "70px",
        "2xl": "21px",
      },
    },
    fontSize: {
      "13xl": "32px",
      "5xl": "24px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
