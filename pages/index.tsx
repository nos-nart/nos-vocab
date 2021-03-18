import { NextSeo } from 'next-seo';
import { Box } from '@chakra-ui/react';
import useSWR from 'swr';

import { fetcher } from '@/utils/fetcher';
import { EmptyState } from '@/components/EmptyState';

// import dynamic from 'next/dynamic';

// const UnauthenticatedComponent = dynamic(() =>
//   import('../components/unauthenticated')
// )

export default function Home() {
  const { data } = useSWR('/api/words', fetcher);

  if (!data) {
    return (
      <Box
        w={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        style={{ height: 'calc(100vh - 10rem)' }}
      >
        <EmptyState width={500} />
      </Box>
    )
  }

  return (
    <>
      <NextSeo
        title="nosnart vocab"
        description="vocabulary is the foundation of language"
      />
      {JSON.stringify(data, null , 2)}
    </>
  )
}

export { getServerSideProps } from '../Chakra'
