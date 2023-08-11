/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#aced7b",

          secondary: "#bfccfc",

          accent: "#2791c6",

          neutral: "#1e191f",

          "base-100": "#242c52",

          info: "#678fd5",

          success: "#1aad9c",

          warning: "#fba818",

          error: "#eb4256",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
