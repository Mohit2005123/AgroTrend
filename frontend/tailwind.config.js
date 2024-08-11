/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      animation: {
        wobble: 'wobble 1s ease-in-out',
        pulse: 'pulse 2s infinite',
        'fade-in': 'fade-in 1s ease-out',
        bounce: 'bounce 2s infinite',
        vortex: 'vortex 10s linear infinite', // Add vortex animation
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        wobble: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(-5deg)' },
          '30%': { transform: 'rotate(5deg)' },
          '45%': { transform: 'rotate(-5deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        vortex: { // Define vortex keyframes
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animationDelay: {
        '1': '0.5s',
        '2': '1s',
        '3': '1.5s',
        '4': '2s',
      },
      backgroundImage: {
        'vortex': 'radial-gradient(circle, #000000 20%, transparent 70%)', // Define vortex background
      },
    },
  },
  plugins: [nextui(), addVariablesForColors],
  darkMode: "class", // Enable dark mode support
}

function addVariablesForColors({ addBase, theme }) {
  // Flatten the color palette from the theme
  const allColors = flattenColorPalette(theme("colors"));
  
  // Create an object with CSS variable names as keys and corresponding color values
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  // Add the CSS variables to the :root selector
  addBase({
    ":root": newVars,
  });
}
