/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b4a0f7",

          secondary: "#ff56bb",

          accent: "#c2b6ef",

          neutral: "#1e202f",

          "base-100": "#faf9fb",

          info: "#2865d7",

          success: "#4ce1c1",

          warning: "#f6ce4c",

          error: "#f84f52",
        },
      },
    ],
  },
};
