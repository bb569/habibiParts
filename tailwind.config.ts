import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'a': '#1E3A5F', // آبی تیره
        'b': '#F8F9FA', // سفید مایل به خاکستری
        'c': '#FF6B35', // نارنجی پررنگ
        'd': '#007BFF', // آبی روشن
        'e': '#6C757D', // طوسی روشن
        'r': '#DC3545', // قرمز روشن
      },
    },
  },
  plugins: [],
} satisfies Config;
