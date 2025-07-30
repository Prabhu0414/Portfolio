/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
   
  ],
}


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         shootingStar: {
//           '0%': {
//             transform: 'translate(0, 0) rotate(45deg)',
//             opacity: '1',
//           },
//           '100%': {
//             transform: 'translate(800px, 500px) rotate(45deg)',
//             opacity: '0',
//           },
//         },
//       },
//       animation: {
//         shootingStar: 'shootingStar 2s ease-out forwards',
//       },
//     },
//   },
//   plugins: [],
// };
