// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peakblue: '#003067 ',     // Deep navy blue
        peakyellow: '#FFCB08',   // Your golden yellow
        peakgray: "#001A39",     // For cards/sections
      },
      fontFamily: {
        // Use Inter or Montserrat if your UI uses it
        sans: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
