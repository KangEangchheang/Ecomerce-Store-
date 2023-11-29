// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poetsen: ['PoetsenOne', 'sans-serif'],
      },

      colors:{
        'promotion':'#AF5D63',
        'discount':'#41658A',
        'new':'#397367',
        'restock':'#394673',
        'secondary1':'#1E293B',
        'secondary':'#F5F5F5',
        'text2':'#000000',
        'text1':'#7D8184',
        'text':'#FAFAFA',
        'primary1':'#363738',
        'primary':'#FFFFFF'
      },
      fontSize: {
        'size': '12px',
        'size1': '14px',
        'size2': '20px',
    }
    },
  },
  plugins: [],
}



