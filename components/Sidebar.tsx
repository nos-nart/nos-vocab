import React from 'react';

import MenuBar from './MenuBar';
import MenuBarSmall from './MenuBarSmall';

type SidebarProps = {
  isMinimized?: boolean;
}

export const Sidebar = ({ isMinimized }: SidebarProps): JSX.Element => {
  return (
    <>
      { isMinimized ? <MenuBarSmall /> : <MenuBar /> }
    </>
  )
}
