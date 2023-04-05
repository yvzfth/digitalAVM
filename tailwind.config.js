/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe\\ UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira\\ Sans',
        'Droid\\ Sans',
        'Helvetica\\ Neue',
        'sans-serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Lucida\\ Console',
        'Liberation\\ Mono',
        'DejaVu\\ Sans\\ Mono',
        'Bitstream\\ Vera\\ Sans\\ Mono',
        'Courier\\ New',
        'monospace',
      ],
    },
    extend: {
      boxShadow: {
        card: '0px 0px 10px 0px rgba(0,0,0,0.2)',
      },
      animation: {
        marquee: 'marquee 100s linear infinite alternate',
        marquee2: 'marquee2 100s linear infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'hero-pattern':
          '-webkit-linear-gradient(65deg, #056AA6 50%, #E4E9FD 50%)',
      },
    },
  },
  plugins: [],
};
