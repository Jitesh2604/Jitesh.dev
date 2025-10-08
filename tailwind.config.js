/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
    theme: {
      extend: {
        colors: {
          border: "hsl(240 5% 84%)",
          background: "hsl(0 0% 100%)",
          foreground: "hsl(240 10% 3.9%)",
        },
        boxShadow: {
          glow: "0 0 10px hsl(240 5% 64.9%)",
        },
        borderRadius: {
          lg: "1rem",
        },
      },
    },
    plugins: [],
  };
  