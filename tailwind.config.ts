import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "128": "32rem",
      },
      colors: {
        background: "var(--background)",
        common: "var(--common)",
        foreground: "var(--foreground)",
        spancolor: "var(--spancolor)",
        spanhover: "var(--spanhover)",
        cardcolor: "var(--cardColor)",
        bordercolor: "var(--border)",
        card: {
          DEFAULT: "var(--cardColor)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      backgroundImage: {
        cardgradient: `linear-gradient(
          135deg,
          hsla(0, 0%, 3.4%, 1) 0%,
          hsla(0, 0%, 3%, 1) 48%,
          hsla(0, 0%, 1.2%, 1) 100%
        )`,
        purplegradient:
          "linear-gradient(135deg, hsla(268, 100%, 58%, 1) 0%, hsla(268, 91%, 54%, 1) 39%, hsla(268, 82%, 50%, 1) 100%)",
        purplehover:
          "linear-gradient(135deg, hsla(268, 82%, 45%, 1) 0%, hsla(268, 82%, 45%, 1) 39%, hsla(268, 82%, 45%, 1) 100%)",
        
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
