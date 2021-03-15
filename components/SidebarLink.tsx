/* eslint-disable jsx-a11y/anchor-is-valid */
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

export const SidebarLink: FC<LinkProps> = ({ href, ...props }) => {
  const router = useRouter();
  const activeStyle = router.pathname.includes(href as string) && `active`;
  const bg = `#2b6cb0`;
  // NOTE: conditionally color background
  // const bg = colorMode === 'light' ? 'red' : 'green';

  return (
    <>
      <Link href={href} passHref>
        <a
          className={`${activeStyle}`}
        >
          {props.children}
        </a>
      </Link>
      <style jsx>{`
        a {
          position: relative;
          transition: all 200ms linear;
          letter-spacing: 0.5px;
          overflow: hidden;
          padding: 1rem 2rem;
          display: inline-flex;
          align-items: center;
          width: 100%;
        }
        a::before {
          content: '';
          position: absolute;
          height: 100%;
          width: 7px;
          background: ${bg};
          top: 0;
          right: -10px;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          transition: all 0.08s linear;
        }
        a:hover::before {
          right: 0;
        }
        .active::before {
          right: 0;
        }
      `}</style>
    </>
  );
};