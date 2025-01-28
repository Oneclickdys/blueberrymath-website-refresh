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
      fontSize: {
        // Headers
        'h1': '64px',
        'h2': '48px',
        'h3': '32px',
        'h4': '20px',
        // Body
        'body-xl': '18px',
        'body-l': '16px',
        'body-m': '14px',
        'body-s': '12px',
        'body-xs': '10px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        secondary: ['Quicksand', 'sans-serif'],
      },
      fontWeight: {
        medium: '500',
        semibold: '600',
        bold: '700',
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
          hover: "#3703A4", // Hover color
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#3703A4", // Updated secondary color
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
          dark: "#7E69AB",
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
          '01': '#303949',
          '02': '#4D586C',
          '03': '#647082',
          '04': '#7A8598',
          '05': '#939DB0',
          '06': '#AFB7C6',
          '07': '#C8CFDA',
          '08': '#DFE5EC',
          '09': '#F0F4F8',
          '10': '#FBFCFD',
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;