/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-2": "var(--color-primary-2)",
        secondary: "var(--color-secondary)",
        bg: "var(--color-bg)",
        "bg-hover": "var(--color-bg-hover)",
        line: "var(--color-line)",
      },
    },
  },
  plugins: [],
};
