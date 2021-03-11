import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { AppLogo } from './AppLogo';

export const Header = (): JSX.Element => {
  return (
    <>
      <header>
        <Flex py={4} px={8} justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <AppLogo width={45} />
            <Text as="span" lineHeight={3} fontSize={'xs'} ml={2} fontWeight={'bold'}>nos<br/>vocab</Text>
          </Flex>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </header>
    </>
  )
}
