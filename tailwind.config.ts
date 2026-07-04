import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
        },
        foreground: "var(--text)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        brand: {
          border: "var(--border)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-gradient": "var(--gradient)",
      },
    },
  },
  plugins: [],
};
export default config;
