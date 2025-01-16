import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        secondary: ['Quicksand', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#5A34E1", // Pantone 2098C
          light: "#ACACF7",
          dark: "#370344", // Pantone 2735C
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#3C3CBF", // Corporate Blue
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#5A34E1",
          hover: "#370344",
          foreground: "#FFFFFF",
        },
        neutral: {
          DEFAULT: "#FBFCFD",
          light: "#ACACF7",
          dark: "#BFBCFD",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          '01': '#FBFCFD',
          '05': '#555555', // Darkened for better legibility
          '10': '#333333', // Darkened for better legibility
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "rotate-y": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        "flip": "rotate-y 0.5s ease-out forwards",
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;