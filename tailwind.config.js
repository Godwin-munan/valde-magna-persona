/** @type {import('tailwindcss').Config} */

export const content = ["./**/*.{html,ts}"];
export const theme = {
  screens: {
    sm: "340px",
    md: "540px",
    lg: "768px",
    xl: "1180px"
  },
  extend: {},
  fontFamily: {
    Jost: ["Jost", "sans-serif"],
    Lobster: ["Lobster", "sans-serif"]
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "12px",
      md: "32px"
    }
  }
};