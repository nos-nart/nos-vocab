import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Box h={'100%'} minHeight={'100vh'}>
        <Header />
        <Flex>
          <Sidebar />
          <Flex style={{ marginLeft: '250px' }} p={6} flexGrow={1}>
            {children}
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
