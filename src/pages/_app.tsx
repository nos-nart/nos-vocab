import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { ThemeProvider, GlobalStyles } from '@/components/index';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles>
          <Component {...pageProps} />
        </GlobalStyles>
      </ThemeProvider>
    </>
  );
}
