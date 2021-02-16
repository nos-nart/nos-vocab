import 'tailwindcss/tailwind.css';
import PageWithLayoutType from '@/types/pageWithLayout';
import { ThemeProvider } from '@/components/index';

type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children: any) => <>{children}</>);

  return (
    <>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
