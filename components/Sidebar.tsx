import React from 'react';
import { Box } from '@chakra-ui/react';

export const Sidebar = (): JSX.Element => {
  return (
    <>
      <Box
        style={{ height: `calc(100vh - 4rem)` }}
        borderRight="1px"
        borderColor={"gray.200"}
        width={200}
        pos="fixed"
        top={16}
        px={6}
        py={4}
      >
        This is the sidebar
      </Box>
    </>
  )
}
