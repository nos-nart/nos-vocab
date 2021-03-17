import { NextSeo } from 'next-seo';
import { Button } from '@chakra-ui/react';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';

// import dynamic from 'next/dynamic';

// const UnauthenticatedComponent = dynamic(() =>
//   import('../components/unauthenticated')
// )

export default function Home(props) {
  // const initialData = props.data;
  // const { data } = useSWR('/api/words', fetcher, { initialData });
  // console.log("🚀 ~ file: index.tsx ~ line 15 ~ Home ~ data", data)

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
