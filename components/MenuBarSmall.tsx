import React from 'react';
import Link from 'next/link';
import { Text, Box, Flex, VStack, useColorMode } from '@chakra-ui/react';
import {
  RiBookmark3Fill,
  RiSwordLine,
  RiChatQuoteLine,
  RiTrophyLine,
  RiMagicLine,
} from "react-icons/ri";
import { VscQuestion } from "react-icons/vsc";
import { FiHash } from "react-icons/fi";

import { AppLogo } from './AppLogo';
import { NextChakraLink } from './NextChakraLink';

type MenuBarSmallLinkProps = {
  href?: string;
  icon?: any;
  title?: string;
}

function MenuBarSmallLink({ href, icon, title }: MenuBarSmallLinkProps) {
  return (
    <NextChakraLink href={href}>
      <Flex flexDir="column" alignItems="center" my={3}>
        {icon}
        <Text fontSize="xx-small" mt={1}>{title}</Text>
      </Flex>
    </NextChakraLink>
  );
}

const MenuBarSmall = () => {
  const { colorMode } = useColorMode();
  return (
    <VStack
      h={'100vh'}
      w={'20'}
      borderRight={'1px'}
      py={3}
      borderRightColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
    >
      <Link href={'/'}>
        <a>
          <AppLogo width={40} />
        </a>
      </Link>
      <Box display="flex" flexDir="column" pt={6}>
        <MenuBarSmallLink href='/newwords' icon={<RiSwordLine size={25} />} title="new words" />
        <MenuBarSmallLink href='/phrasalverb' icon={<RiMagicLine size={25} />} title="phrasal verb" />
        <MenuBarSmallLink href='/quotes' icon={<RiChatQuoteLine size={25} />} title="quotes" />
        <MenuBarSmallLink href='/favorites' icon={<RiBookmark3Fill size={25} />} title="favorites" />
        <MenuBarSmallLink href='/archived' icon={<RiTrophyLine size={25} />} title="archived" />
        <MenuBarSmallLink href='/til' icon={<FiHash size={25} />} title="til" />
        <MenuBarSmallLink href='/questions' icon={<VscQuestion size={25} />} title="questions" />
      </Box>
    </VStack>
  )
}

export default MenuBarSmall;
