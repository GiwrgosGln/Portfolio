/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111418",
        secondary: "#5C87F6",
        primaryText: "#9499AF",
        secondaryText: "#FFFFFF",
        textBackground: "#191E2C",
        projectsBackground: "#15181E",
      },
    },
  },
  plugins: [],
};
