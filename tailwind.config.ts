import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 90deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        slide: 'slide 0.3s linear infinite',
      },
      keyframes: {
        pulse: {
          '0%': { opacity:"1" },
          '50%': {opacity:"0.8"},
          '100%': {opacity:"1"}
        }
        // pulse: {
        //   '0%': { backgroundColor: 'rgb(20, 83, 45)' },
        //   '50%': { backgroundColor: 'rgb(22, 163, 74)' },
        //   '100%': { backgroundColor: 'rgb(20, 83, 45)' }
        // }
        // playpulse: {
        //   '0%': { backgroundColor: 'rgb(185, 28, 28)' },
        //   '50%': { backgroundColor: 'rgb(129 23 23)' },
        //   '100%': { backgroundColor: 'rgb(185, 28, 28)' }
        // }
      }

    },
  },
  plugins: [],
} satisfies Config;
