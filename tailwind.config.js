/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F3F1EF',     // Paper White
        secondary: '#E7E5E2',   // Faded Grey
        dark: '#25211B',        // Coffee
        muted: '#635A4E',       // Earth
        accent: {
          green: '#C5CAAA',     // Muted Olive
          orange: '#CD5C1C'     // Clementine
        }
      },
      fontFamily: {
        serif: ['"PP Eiko"', 'Georgia', 'serif'],
        mono: ['"Geist Mono"', 'monospace'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
