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
        // purple: {
        //   DEFAULT: '#6a0dad',  // Default purple
        //   50: '#f5e8ff',       // Very light purple (almost white)
        //   100: '#e0b3ff',      // Light purple
        //   200: '#c580ff',      // Lighter purple
        //   300: '#a64cff',      // Medium light purple
        //   400: '#8720e1',      // Medium purple
        //   500: '#6a0dad',      // Default purple
        //   600: '#580a99',      // Darker purple
        //   700: '#450783',      // Even darker purple
        //   800: '#340566',      // Very dark purple
        //   900: '#24034a',      // Deepest purple
        // },
        black: {
         DEFAULT: '#000',
         100: '#000319' 
        }
      },
    },
  },
  plugins: [],
};
export default config;
