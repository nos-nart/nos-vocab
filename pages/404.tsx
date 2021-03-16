import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Flex, Text } from '@chakra-ui/react';

import StrawMan from '../svg/strawman.svg';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <NextSeo title="404" description="you lost!" />
      <Flex direction={'column'} alignItems="center" justifyContent="center" w={'full'} my={'16'}>
        <StrawMan width={400} />
        <Text mt={8} mb={2} color={'gray.500'}>Sorry, the content you're looking for doesn't exist.</Text>
      </Flex>
    </>
  )
}

export default NotFoundPage;
