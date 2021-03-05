import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <div className="h-screen flex items-start">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  </>
);
