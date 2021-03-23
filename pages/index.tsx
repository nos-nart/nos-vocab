import { NextSeo } from 'next-seo';
import { Box, Flex } from '@chakra-ui/react';
import useSWR from 'swr';

import { fetcher } from '@/utils/fetcher';
import { EmptyState } from '@/components/EmptyState';
import { WordItem } from '@/components/WordItem';
// import dynamic from 'next/dynamic';

// const UnauthenticatedComponent = dynamic(() =>
//   import('../components/unauthenticated')
// )

export default function Home() {
  const { data, isValidating } = useSWR('/api/words', fetcher);

  if (isValidating) {
    return (
      <>...loading</>
    )
  }

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
      <Flex
        flexWrap={'wrap'}
        width={'full'} px={'48'}
      >
        {
          data && data.words.map(
            (i: {[key: string]: string}) => <WordItem showRemove={false} key={i._id} word={i} />
          )
        }
      </Flex>
    </>
  )
}

export { getServerSideProps } from '../Chakra'
