import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  extendTheme,
} from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { ReactNode } from 'react';
import fetch from 'node-fetch';
import { server } from '@/config/index';
import { fetcher } from '@/utils/fetcher';

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

interface ChakraProps {
  cookies?: string
  children: ReactNode
}

export const Chakra = ({ children, cookies }: ChakraProps) => {
  return (
    <ChakraProvider
      colorModeManager={
        cookies ? cookieStorageManager(cookies) : localStorageManager
      }
      theme={theme}
    >
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({
  req,
}: GetServerSidePropsContext): Promise<any> {
  const result = await fetch(`${server}/api/words`);
  console.log("🚀 ~ file: Chakra.tsx ~ line 52 ~ result", result)
  const data = await result.json();
  console.log("🚀 ~ file: Chakra.tsx ~ line 53 ~ data", data)
  // const data = await fetcher('/api/words');
  return {
    props: {
      cookies: req.headers.cookie ?? '',
      data,
    },
  }
}
