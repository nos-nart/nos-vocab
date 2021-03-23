import React from 'react';
import { NextPage } from 'next';
import { VStack, Text, Flex, Box } from '@chakra-ui/layout';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';

import { Emoji } from '@/components/Emoji';
import { EmptyState } from '@/components/EmptyState';
import { AddNewWord } from '@/components/AddNewWord';

const NewWords: NextPage = () => {
  const { data } = useSWR('/api/words/myword', fetcher);

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
    <VStack width={'full'} px={'48'}>
      <Text color={'gray.400'} fontSize={'sm'} mb={6} width={'full'}>
        <Emoji symbol="📚" label={'books'} />&nbsp;
        Vocabulary knowledge is often viewed as a critical tool for second language learners because a limited vocabulary in a second language impedes successful communication.
      </Text>
      <Flex justifyContent={'space-between'} alignItems={'center'} w={'100%'}>
        <Text fontSize="3xl" fontWeight={'bold'}>
          <Emoji symbol="📝" label={'pencil'}/>&nbsp;
          New word
        </Text>
        <AddNewWord />
      </Flex>
      <VStack>
        {data && data.myWords.map(w => <p>{w.word}</p>)};
      </VStack>
    </VStack>
  );
}

export default NewWords;
