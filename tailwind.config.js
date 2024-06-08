/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#888b92",
          "200": "#82848a",
          "300": "#262626",
          "400": "#191d2a",
          "500": "rgba(0, 0, 0, 0.5)",
          "600": "rgba(22, 22, 22, 0)",
        },
        black: "#000",
        darkslategray: "#333",
        tomato: "#ff5555",
        red: "#ff0000",
      },
      spacing: {},
      fontFamily: {
        amiko: "Amiko",
        aboreto: "Aboreto",
        andika: "Andika",
        "dm-sans": "'DM Sans'",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "nunito-sans": "'Nunito Sans'",
      },
    },
    fontSize: {
      base: "1rem",
      "13xl": "2rem",
      lgi: "1.188rem",
      "7xl": "1.625rem",
      "8xs-2": "0.263rem",
      "xs-8": "0.738rem",
      lg: "1.125rem",
      "29xl": "3rem",
      "10xl": "1.813rem",
      "19xl": "2.375rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      xl: "1.25rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
