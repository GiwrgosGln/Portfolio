/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111418",
        secondary: "#4461AF",
        primaryText: "#767F96",
        secondaryText: "#FFFFFF",
        textBackground: "#191E2C",
        projectsBackground: "#15181E",
      },
    },
  },
  plugins: [],
};
