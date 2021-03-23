import React from 'react';
import {
  Flex,
  Text,
  Box,
  Button,
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { AppLogo } from './AppLogo';
import GoogleIcon from '../svg/googleicon.svg';
import { ProfileIcon, LogOutIcon, ChevronDownIcon } from './svgs';


export const Header = (): JSX.Element => {
  const [session] = useSession();
  const { colorMode } = useColorMode();

  return (
    <>
      <header style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 99 }}>
        <Flex
          background={colorMode === "light" ? "gray.300" : "gray.900"}
          borderBottom={"1px"}
          borderBottomColor={colorMode === "light" ? "transparent" : "gray.700"}
          height={'16'}
          px={8}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href={'/'}>
            <a>
              <Flex alignItems="center">
                <AppLogo width={45} />
                <Text as="span" lineHeight={3} fontSize={'xs'} ml={2} fontWeight={'bold'} textColor={'blue.500'}>nos<br/>vocab</Text>
              </Flex>
            </a>
          </Link>
          <Box display="flex" alignItems="center">
            <ColorModeSwitcher justifySelf="flex-end" mr={4} />
            {!session && <LoginButton />}
            {session && <LoggedInButton />}
          </Box>
        </Flex>
      </header>
    </>
  )
}

function LoginButton() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <Button
      isLoading={isLoading}
      loadingText="Logging"
      colorScheme={"blue"}
      variant="outline"
      size={'sm'}
      borderWidth={'medium'}
      onClick={() => {
        setIsLoading(true);
        signIn("google", {
          callbackUrl: `${process.env.NEXTAUTH_URL}`,
        });
      }}
    >
      <Text mr={2}>Log in</Text>
      <GoogleIcon width={20}/>
    </Button>
  )
}

function LoggedInButton() {
  const [session] = useSession();

  return (
    <>
      <Flex alignItems="center">
        <Text fontSize={'xs'}>{session?.user.name}</Text>
        <Avatar mx={3} size={'md'} src={session?.user.image} />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Profile"
            icon={<ChevronDownIcon width={20} />}
            size="sm"
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<ProfileIcon width={20} />}>
              Profile
            </MenuItem>
            <MenuItem
              as="button"
              icon={<LogOutIcon width={20} />}
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  )
}