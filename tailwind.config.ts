import type { Config, } from "tailwindcss";

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
        primary: {
  DEFAULT: '#1E3A8A',
  50:  '#EEF2FF',
  100: '#E0E7FF',
  200: '#C7D2FE',
  300: '#A5B4FC',
  400: '#818CF8',
  500: '#6366F1',
  600: '#4F46E5',
  700: '#4338CA',
  800: '#3730A3',
  900: '#312E81',

},
secondary: { 
  DEFAULT: '#F59E0B',
  50: '#FFF7ED', 
  100: '#FEF0C7',  
  200: '#FDE68A',  
  300: '#FCD34D',  
  400: '#FBBF24',  
  500: '#F59E0B',  
  600: '#D97706',  
  700: '#B45309',  
  800: '#9A4D04',  
  900: '#7C2D12', 
},

      },
    },
  },
  plugins: [],
} satisfies Config;
