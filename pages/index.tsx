import { NextSeo } from 'next-seo';
import { Button } from '@chakra-ui/react';
// import dynamic from 'next/dynamic';

// const UnauthenticatedComponent = dynamic(() =>
//   import('../components/unauthenticated')
// )

export default function Home() {
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
