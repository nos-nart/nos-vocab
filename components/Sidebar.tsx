import React from 'react';
import { Box, useColorMode, Text, Icon, VStack } from '@chakra-ui/react';
import dayjs from 'dayjs';

import { SidebarLink } from './SidebarLink';
import { Emoji } from './Emoji';
import { BookmarkIcon, HashTagIcon, PuzzleIcon, QuoteIcon, SwordIcon, TrophyIcon } from './svgs';

export const Sidebar = (): JSX.Element => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        display={'flex'}
        flexDir={'column'}
        justifyContent={'space-between'}
        style={{ height: `calc(100vh - 4rem)` }}
        borderRight="1px"
        background={colorMode === 'light' ? "gray.100" : "gray.900"}
        borderColor={colorMode === 'light' ? "gray.300" : "gray.700"}
        width={250}
        pos={'fixed'}
        top={16}
        py={6}
      >
        <VStack>
          <SidebarLink href={'/newwords'}>
            <Icon as={SwordIcon} mr={3} w={6} h={6} />new words
          </SidebarLink>
          <SidebarLink href={'/phrasalverb'}>
            <Icon as={PuzzleIcon} mr={3} w={6} h={6} />phrasal verb
          </SidebarLink>
          <SidebarLink href={'/quotes'}>
            <Icon as={QuoteIcon} mr={3} w={6} h={6} />quotes
          </SidebarLink>
          <SidebarLink href={'/bookmark'}>
            <Icon as={BookmarkIcon} mr={3} w={6} h={6} />bookmark
          </SidebarLink>
          <SidebarLink href={'/archived'}>
            <Icon as={TrophyIcon} mr={3} w={6} h={6} />archived
          </SidebarLink>
          <SidebarLink href={'/til'}>
            <Icon as={HashTagIcon} mr={3} w={6} h={6} />TIL
          </SidebarLink>
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
    </>
  )
}
