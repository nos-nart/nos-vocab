import React from 'react';
import { NextPage } from 'next';
import { Text, Flex, Button, VStack } from '@chakra-ui/react';

import { Emoji } from '@/components/Emoji';
import { FiPlus } from "react-icons/fi"

const Til: NextPage = () => {
  return (
    <VStack px={{ base: '4', lg: '48' }}>
      <Text color={'gray.400'} fontSize={'sm'} mb={6} width={'full'}>
        <Emoji symbol="🐣 " label={'hatched-chicken'} />&nbsp;
        You learn something new every day; what did you learn today? Submit interesting and specific facts about something that you just found out here.
      </Text>
      <Flex justifyContent={'space-between'} alignItems={'center'} w={'100%'}>
        <Text fontSize="3xl" fontWeight={'bold'}>Today I Learned</Text>
        <Button
          size="sm"
          colorScheme={'facebook'}
          leftIcon={<FiPlus size={20} />}
        >
          Add
        </Button>
      </Flex>
    </VStack>
  );
}

export default Til;
