/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/provider/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        coral: {
          50: "#FFF8F9",
          100: "#FEF1F2",
          200: "#FDDCDF",
          300: "#FBC7CC",
          400: "#F99CA6",
          500: "#F67280",
          600: "#DD6773",
          700: "#94444D",
          800: "#6F333A",
          900: "#4A2226",
        },
        shell: {
          50: "#F5F7F9",
          100: "#EBEFF2",
          200: "#CDD6DF",
          300: "#AEBECB",
          400: "#728DA4",
          500: "#355C7D",
          600: "#305371",
          700: "#20374B",
          800: "#182938",
          900: "#101C26",
        },
        lipstick: {
          50: "#FCF8F9",
          100: "#F9F0F3",
          200: "#EFDAE0",
          300: "#E6C4CE",
          400: "#D398A9",
          500: "#C06C84",
          600: "#AD6177",
          700: "#73414F",
          800: "#56313B",
          900: "#3A2028",
        },
        black: "#111d26",
        white: "#f8f8ff",
      },
    },
  },
  plugins: [
  require('@tailwindcss/typography')
  ],
};
