module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#18202B",
      blue: "#3b82f6",
      primary: {
        100: "#FAF1F0",
        200: "#FBAFA7",
        300: "#FC8D81",
        400: "#FF6150",
      },
      secondary: {
        100: "#EDE3FF",
        200: "#BEA4EF",
        300: "#723DD8",
      },
      gray: {
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#CEBAB8",
      },
      chocolate: {
        100: "#A08C8A",
        200: "#453F3F",
      },
    },
  },
  plugins: [],
};
