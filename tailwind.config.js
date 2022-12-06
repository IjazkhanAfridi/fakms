/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: { max: '499px' },
      tablet: '1200px',
      md: '501px',
    },
  },
  plugins: [],
};
