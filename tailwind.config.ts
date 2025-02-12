import { span } from "framer-motion/client";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem', 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        spancolor: "var(--spancolor)",
        spanhover: "var(--spanhover)",
        cardcolor: "var(--cardColor)",
        bordercolor: "var(--border)",
      },
    },
  },
  plugins: [],
} satisfies Config;
