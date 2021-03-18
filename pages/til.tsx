import React from 'react';
import { NextPage } from 'next';
import { Text, Flex, Button, VStack } from '@chakra-ui/react';

import { Emoji } from '@/components/Emoji';
import { PlusIcon } from '@/components/svgs';

const Til: NextPage = () => {
  return (
    <VStack>
      <Text as={'p'} color={'gray.400'} size={'xs'}>
        <Emoji symbol="🐣 " label={'hatched-chicken'} />&nbsp;
        You learn something new every day; hat did you learn today? Submit interesting and specific facts about something that you just found out here.
      </Text>
      <Flex justifyContent={'space-between'} alignItems={'center'} w={'100%'} my={6}>
        <Text fontSize="3xl" fontWeight={'bold'}>Today I Learned</Text>
        <Button
          size="sm"
          colorScheme={'facebook'}
          leftIcon={<PlusIcon width={20} />}
        >
          Add
        </Button>
      </Flex>
    </VStack>
  );
}

export default Til;
