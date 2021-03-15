import React from 'react';
import { Box, useColorMode, Text } from '@chakra-ui/react';

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
          <SwordIcon width={25}/>
          <Text ml={3}>new words</Text>
        </SidebarLink>
        <SidebarLink href={'/phrasalverb'}>
          <PuzzleIcon width={25}/>
          <Text ml={3}>phrasal verb</Text>
        </SidebarLink>
        <SidebarLink href={'/quotes'}>
          <QuoteIcon width={25}/>
          <Text ml={3}>quotes</Text>
        </SidebarLink>
        <SidebarLink href={'/bookmark'}>
          <BookmarkIcon width={25}/>
          <Text ml={3}>bookmark</Text>
        </SidebarLink>
        <SidebarLink href={'/archived'}>
          <TrophyIcon width={25}/>
          <Text ml={3}>archived</Text>
        </SidebarLink>
        <SidebarLink href={'/til'}>
          <HashTagIcon width={25}/>
          <Text ml={3}>TIL</Text>
        </SidebarLink>
      </Box>
    </>
  )
}
