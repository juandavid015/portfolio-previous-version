/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.{html,js}"], 
  darkMode: 'class',
  theme: {
    
    extend: {
      
      colors: {
        'light': "white", 
        'dark': '#0a0717',
        'light-2': "#f0f0ff",
        'dark-2': "#0c081b",
        'font-color-white': '#bdd7ff',
        'content-light': '#5833ff',
        'content-dark': '#0a0717',
        'secondary-dark-1': '#93CBFF',
        'secondary-dark-2': '#7e1386',
        'font-color-dark': '#40316C',
        'dark-contrast-color': '#7F21C8',
        'light-contrast-color': '#27addd',
        'secondary-light-1': '#a37ee2',
        'secondary-light-2': '#d0a376'

      },
      backgroundImage: {
        'g1' : "linear-gradient(to right, #5833ff 0%, rgba(255, 255, 255, 0) 50%)",
        'g2': "linear-gradient(90deg, rgba(247,246,254,0) 0%, rgba(24,19,48,1) 0%, rgba(255,255,255,0) 84%)"
      },
      animation: {
        'button': 'button 3s linear infinite', 
        'loader': 'loader 3s linear infinite alternate-reverse', 
        'fade-in': 'fade-in 1s linear forwards',
        'fade-out': 'fade-out 1s linear forwards'
      },
      keyframes: {
        button: {
          
          '0%': { background: 'inherit', 'background-position': 'left' },
          '50%': { background: 'white', 'background-position': 'right' },
          
        },

        'fade-in': {
          '0%': { opacity: '0'},
          '100%': {opacity: '1'},
        },
        'fade-out': {
          '0%': { height: 'fit-content', width:'1' },
          '100%': { height: '0px', width:'0'},
        },
        loader: {
          "0%": { transform: "translateY(25px)"},
          "25%": { transform: "translateY(-25px)"},
          "50%": { transform: "translateY(25px)"},
          "100%": { transform: "translateY(-25px)"}
        }
      },
      spacing: {
        '16px': '16px',
        '32px': '32px',
        '64px': '64px',
        '82px': '82px'
      },
      gridTemplateColumns: {
        layoutSkills: 'repeat(auto-fit, minmax(100px, 1fr))',
        layoutOherProjects: 'repeat(auto-fit, minmax(350px, 1fr))',
        layoutContact: 'repeat(auto-fit, minmax(350px, 1fr))',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
