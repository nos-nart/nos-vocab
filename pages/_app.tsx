// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const fonts = {
  body: 'Inter, -apple-system, BlinkMacSystemFont',
}

const theme = extendTheme({
  styles: {
    global: {
      'body': {
        scrollBehavior: 'smooth'
      },
      '#__next': {
        minHeight: '100vh'
      }
    }
  },
  fonts
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
