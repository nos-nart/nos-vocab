import { NextSeo } from 'next-seo';
import { Button } from '@chakra-ui/react';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
// import dynamic from 'next/dynamic';

// const UnauthenticatedComponent = dynamic(() =>
//   import('../components/unauthenticated')
// )

export default function Home() {
  const { data } = useSWR('/api/words', fetcher);
  console.log("🚀 ~ file: index.tsx ~ line 13 ~ Home ~ data", data);
  return (
    <>
      <NextSeo
        title="nosnart vocab"
        description="vocabulary is the foundation of language"
      />
      <Button>test</Button>
    </>
  )
}

export { getServerSideProps } from '../Chakra'
