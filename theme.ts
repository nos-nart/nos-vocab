import { extendTheme } from "@chakra-ui/react";

const fonts = {
  body: 'Inter, -apple-system, BlinkMacSystemFont',
}

// Let's say you want to add custom colors
const customTheme = extendTheme({
  styles: {
    global: {
      'body': {
        scrollBehavior: 'smooth',
        fontSize: '0.875rem'
      }
    }
  },
  sizes: {
    xxs: "4.5em",
    "2sm": "14.5em",
    xxl: "7em",
  },
  colors: {},
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "83.5em",
    xsl: "93em",
    "2xl": "96em",
    xxl: "95em",
  },
  fonts
});

export default customTheme;
