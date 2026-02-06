/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: { 
      scale: {
        '25': '0.25',    // 25% of the original size
        '50': '0.5',     // 50% of the original size
        '75': '0.75',    // 75% of the original size
        '80': '0.8',     // 80% of the original size
        '90': '0.9',     // 90% of the original size
        '99': '0.99',    // 99% of the original size
        '101': '1.01',   // Slightly larger than original size
        '105': '1.05',   // 105% of the original size
        '110': '1.10',   // 110% of the original size
        '120': '1.20',   // 120% of the original size
        '125': '1.25',   // 125% of the original size
        '135': '1.35',
        '140': '1.40',
        '150': '1.5',    // 150% of the original size
      }
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
