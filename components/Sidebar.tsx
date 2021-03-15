import React from 'react';
import { Box, useColorMode, Text, Icon } from '@chakra-ui/react';

import { SidebarLink } from './SidebarLink';
import { BookmarkIcon, HashTagIcon, PuzzleIcon, QuoteIcon, SwordIcon, TrophyIcon } from './svgs';

export const Sidebar = (): JSX.Element => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        style={{ height: `calc(100vh - 4rem)` }}
        borderRight="1px"
        background={colorMode === 'light' ? "gray.100" : "gray.900"}
        borderColor={colorMode === 'light' ? "gray.300" : "gray.700"}
        width={250}
        pos="fixed"
        top={16}
        py={6}
      >
        <SidebarLink href={'/newwords'}>
          <Icon as={SwordIcon} mr={3} w={7} h={7} />new words
        </SidebarLink>
        <SidebarLink href={'/phrasalverb'}>
          <Icon as={PuzzleIcon} mr={3} w={7} h={7} />phrasal verb
        </SidebarLink>
        <SidebarLink href={'/quotes'}>
          <Icon as={QuoteIcon} mr={3} w={7} h={7} />quotes
        </SidebarLink>
        <SidebarLink href={'/bookmark'}>
          <Icon as={BookmarkIcon} mr={3} w={7} h={7} />bookmark
        </SidebarLink>
        <SidebarLink href={'/archived'}>
          <Icon as={TrophyIcon} mr={3} w={7} h={7} />archived
        </SidebarLink>
        <SidebarLink href={'/til'}>
          <Icon as={HashTagIcon} mr={3} w={7} h={7} />TIL
        </SidebarLink>
      </Box>
    </>
  )
}
