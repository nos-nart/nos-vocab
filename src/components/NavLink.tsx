import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavLinkProps = {
  children?: React.ReactNode;
  href?: any; // TODO:
};

export const NavLink = ({ href, children }: NavLinkProps) => {
  const router = useRouter();
  const activeStyle = router.pathname.includes(href as string) && `active`;

  return (
    <>
      <Link href={href} passHref />
      <style jsx />
    </>
  );
};
