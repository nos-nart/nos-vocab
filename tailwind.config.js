/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: [],
  darkMode: `class`,
  theme: {
    screens: {
      sm: `640px`,
      md: `860px`,
      lg: `1024px`,
      xl: `1200px`,
      '2xl': `1350px`,
    },
    extend: {
      fontFamily: {
        rubik: [`Rubik`, ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require(`@tailwindcss/typography`),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: `Rubik`,
            src: `url("/fonts/Rubik-Light.ttf")`,
            fontStyle: `light`,
            fontWeight: `300`,
            fontDisplay: `swap`,
          },
        },
        {
          '@font-face': {
            fontFamily: `Rubik`,
            src: `url("/fonts/Rubik-Regular.ttf")`,
            fontStyle: `regular`,
            fontWeight: `400`,
            fontDisplay: `swap`,
          },
        },
        {
          '@font-face': {
            fontFamily: `Rubik`,
            src: `url("/fonts/Rubik-Medium.ttf")`,
            fontStyle: `medium`,
            fontWeight: `500`,
            fontDisplay: `swap`,
          },
        },
        {
          '@font-face': {
            fontFamily: `Rubik`,
            src: `url("/fonts/Rubik-SemiBold.ttf")`,
            fontStyle: `semibold`,
            fontWeight: `600`,
            fontDisplay: `swap`,
          },
        },
        {
          '@font-face': {
            fontFamily: `Rubik`,
            src: `url("/fonts/Rubik-Bold.ttf")`,
            fontStyle: `bold`,
            fontWeight: `700`,
            fontDisplay: `swap`,
          },
        },
        {
          '@font-face': {
            fontFamily: `Rubik`,
            src: `url("/fonts/Rubik-ExtraBold.ttf")`,
            fontStyle: `extrabold`,
            fontWeight: `800`,
            fontDisplay: `swap`,
          },
        },
        {
          '@font-face': {
            fontFamily: `Rubik`,
            src: `url("/fonts/Rubik-Black.ttf")`,
            fontStyle: `black`,
            fontWeight: `900`,
            fontDisplay: `swap`,
          },
        },
      ]);
    },
  ],
};
