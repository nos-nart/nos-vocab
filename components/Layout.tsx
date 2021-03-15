import React from 'react';
import { Flex } from '@chakra-ui/react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className="layout__wrapper">
        <Header />
        <Flex>
          <Sidebar />
          <Flex>
            {children}
          </Flex>
        </Flex>
      </div>
      <style jsx>{`
        .layout__wrapper {
          min-height: '100vh',
          width: '100vw'
        }
      `}</style>
    </>
  )
}
