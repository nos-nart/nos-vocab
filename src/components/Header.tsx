import React from 'react';
import { signIn, useSession } from 'next-auth/client';
import { Logo } from './svgs/Logo';

const ButtonLogin = (): JSX.Element => <button type="button">Sign in</button>;

export const Header = (): JSX.Element => (
  <nav className="flex justify-between items-center">
    <Logo />
    <div>login</div>
  </nav>
);
