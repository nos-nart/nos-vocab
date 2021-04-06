import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isMinimized, setIsMinimized] = React.useState<boolean>(false);

  return (
    <>
      <Box display="flex" w="full" h={'100%'} minHeight={'100vh'}>
        <Sidebar
          isMinimized={isMinimized}
        />
        <Flex flexGrow={1} flexDir={'column'} marginLeft={!isMinimized ? 250 : ''}>
          <Header
            isMinimized={isMinimized}
            setIsMinimized={setIsMinimized}
          />
          {children}
        </Flex>
      </Box>
    </>
  )
}
