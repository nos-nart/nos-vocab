export interface AppRenderProps {
  pageProps: object
  err?: Error
  Component: NextComponentType<NextPageContext, AppRenderProps, object>
  router: NextRouter,
  cookies?: string
}
import type { NextComponentType, NextPageContext } from 'next';
import type { NextRouter } from 'next/router';

import { Layout } from '@/components/Layout';
import { Chakra } from '../Chakra';

export default function App({ Component, pageProps, cookies }: AppRenderProps) {
  return (
    <Chakra cookies={cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from '../Chakra';
