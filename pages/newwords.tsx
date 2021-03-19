import React from 'react';
import { NextPage } from 'next';
import { VStack, Text, Flex } from '@chakra-ui/layout';

import { Emoji } from '@/components/Emoji';
import { AddNewWord } from '@/components/AddNewWord';

const NewWords: NextPage = () => {
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
    </VStack>
  );
}

export default NewWords;
