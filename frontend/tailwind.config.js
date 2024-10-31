// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Make sure all your src files are covered.
    ],
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 10s linear infinite',        // Slow spinning animation
          'spin-reverse-slow': 'spin-reverse 10s linear infinite',  // Reverse slow spinning animation
          'float': 'float 5s ease-in-out infinite',       // Floating animation for test tubes
        },
        keyframes: {
          spin: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          'spin-reverse': {
            '0%': { transform: 'rotate(360deg)' },
            '100%': { transform: 'rotate(0deg)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },   // Start and end at same position
            '50%': { transform: 'translateY(-10px)' },    // Move up slightly at 50%
          },
        },
      },
    },
    plugins: [],
  };
  