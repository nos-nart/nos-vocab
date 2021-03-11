import React from 'react';
import { NextSeo } from 'next-seo';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

import StrawMan from '../svg/strawman.svg';
import Ufo from '../svg/ufo.svg';

const NotFoundPage = () => {
  return (
    <>
      <NextSeo title="404" description="you lost!" />
      <Flex direction={'column'} alignItems="center" justifyContent="center" w={'full'} h={'full'}>
        <StrawMan width={400} />
        <Text mt={8} mb={2} color={'gray.500'}>Sorry, the content you're looking for doesn't exist.</Text>
        <Link href="/">
          <a>
            <Flex alignItems="center">
              <Text mr={2}>Go to home page</Text> <Ufo width={30}/>
            </Flex>
          </a>
        </Link>
      </Flex>
    </>
  )
}

export default NotFoundPage;
