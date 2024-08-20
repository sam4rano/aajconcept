/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg_primary': '#4582FF',
        'button_action':"#FFC145",
        'bg_light':'#F1F1F1',
        'bg_grey':'#86888A',
        'text_blue':'#3973D4',
        'button-inactive':'#F7F0F7',
        'button-hover':'#280E3B',
        'neutral': '#FFFFFF',
        'warning':'#BDD0F133',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
  
      },
      screens: {
        sm:{min:"360px", max:"799px"},
        md:{ min: "800px", max: "1023px" },
        lg: { min: "1024px" }
      },
    },
  },
  plugins: [],
}
