import React from 'react';
import { Flex, Box, useColorMode, Text, Icon, VStack, Divider } from '@chakra-ui/react';
import Link from 'next/link';
import dayjs from 'dayjs';
import {
  RiBookmark3Fill,
  RiSwordLine,
  RiChatQuoteLine,
  RiTrophyLine,
  RiMagicLine,
} from "react-icons/ri";
import { VscQuestion } from "react-icons/vsc";
import { FiHash } from "react-icons/fi";

import { MenuBarLink } from './MenuBarLink';
import { Emoji } from './Emoji';
import { AppLogo } from './AppLogo';

export default function MenuBar() {
  const { colorMode } = useColorMode();

  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      justifyContent={'space-between'}
      height="100vh"
      borderRight="1px"
      background={colorMode === 'light' ? "gray.100" : "gray.900"}
      borderColor={colorMode === 'light' ? "gray.300" : "gray.700"}
      width={250}
      pos={'fixed'}
      top={0}
      left={0}
      py={2}
    >
      <VStack>
        <Box mb={2} w={'full'} px={8}>
          <Link href={'/'}>
            <a>
              <Flex alignItems="center" w={'full'}>
                <AppLogo width={45} />
                <Text as="span" lineHeight={3} fontSize={'xs'} ml={2} fontWeight={'bold'} textColor={'blue.500'}>nos<br/>vocab</Text>
              </Flex>
            </a>
          </Link>
        </Box>
        <MenuBarLink href={'/newwords'}>
          <Icon w={6} h={6} mr={3} as={RiSwordLine} />new words
        </MenuBarLink>
        <MenuBarLink href={'/phrasalverb'}>
          <Icon w={6} h={6} mr={3} as={RiMagicLine} />phrasal verb
        </MenuBarLink>
        <MenuBarLink href={'/quotes'}>
          <Icon w={6} h={6} mr={3} as={RiChatQuoteLine} />quotes
        </MenuBarLink>
        <MenuBarLink href={'/favorites'}>
          <Icon w={6} h={6} mr={3} as={RiBookmark3Fill} />favorites
        </MenuBarLink>
        <MenuBarLink href={'/archived'}>
          <Icon w={6} h={6} mr={3} as={RiTrophyLine} />archived
        </MenuBarLink>
        <MenuBarLink href={'/til'}>
          <Icon w={6} h={6} mr={3} as={FiHash} />TIL
        </MenuBarLink>
        <MenuBarLink href={'/questions'}>
          <Icon w={6} h={6} mr={3} as={VscQuestion} />Questions
        </MenuBarLink>
      </VStack>
      <VStack textAlign={'center'} fontSize={'xs'}>
        <Text px={4}>@{dayjs().get('year')} nosnart</Text>
        <Text>
          Made by <Emoji symbol={`💻`} label={'keyboard'}/>
          <Text as="span" mx={2}>with</Text>
          <Emoji symbol={`❤️`} label={'heart'} />
        </Text>
      </VStack>
    </Box>
  )
}