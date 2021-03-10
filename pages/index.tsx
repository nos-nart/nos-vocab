import { NextSeo } from 'next-seo'
import { Button } from '@chakra-ui/react'

import { Chakra } from '../Chakra'

interface IndexProps {
  cookies?: string
}

export default function Home({ cookies }: IndexProps) {
  return (
    <>
      <NextSeo
        title="nosnart vocab"
        description="vocabulary is the foundation of language"
      />
      <Chakra cookies={cookies}>
        <Button>test</Button>
      </Chakra>
    </>
  )
}

export { getServerSideProps } from '../Chakra'
