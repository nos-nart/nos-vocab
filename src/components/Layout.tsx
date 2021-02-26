import React from 'react';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <div className="min-h-screen flex items-start">
      <></>
      <div className="flex-1">{children}</div>
    </div>
  </>
);
