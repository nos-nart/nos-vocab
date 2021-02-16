import React from 'react';
import { Sidebar } from '@/components/index';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => (
  <div>
    <Sidebar />
    <main>{children}</main>
  </div>
);
