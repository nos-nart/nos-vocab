import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { ThemeProvider, GlobalStyles, Layout } from '@/components/index';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalStyles>
      </ThemeProvider>
    </>
  );
}
