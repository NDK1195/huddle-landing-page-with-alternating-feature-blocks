/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        "button-try-mobile": "0px 2px 7px 0px rgba(0, 0, 0, 0.10)",
        "button-try-desktop": "0px 3px 11px 0px rgba(0, 0, 0, 0.10)",
        "button-get-started": "2px 3px 6px 1px rgba(255, 82, 193, 0.17)",
        box: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)",
      },
      dropShadow: {
        "button-mobile": "0px 3px 7px rgba(0, 37, 46, 0.22)",
        "button-desktop": "0px 6px 13px rgba(0, 37, 46, 0.22)",
      },
      colors: {
        pink: "hsl(322, 100%, 66%)",
        "very-pale-cyan": "hsl(193, 100%, 96%)",
        "very-dark-cyan": "hsl(192, 100%, 9%)",
        "grayish-blue": "hsl(208, 11%, 55%)",
      },
    },
  },
  plugins: [],
};
