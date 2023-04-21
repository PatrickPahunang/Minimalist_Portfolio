/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '110': '28rem',
        '128': '32rem',
      },
      width: {
        '110': '28rem',
        '128': '32rem',
      },
      scale: {
        '175': '1.75',
        '200': '2.00'
      }
    },
    colors: {
      'white': {
        '50': '#ffffff',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
    },
    },
  },
  plugins: [],
}