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
  MenuItem
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client';
import { ChevronDownIcon, InfoIcon, UnlockIcon } from '@chakra-ui/icons';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { AppLogo } from './AppLogo';
import GoogleIcon from '../svg/googleicon.svg';

export const Header = (): JSX.Element => {
  const [session] = useSession();

  return (
    <>
      <header>
        <Flex
          borderBottom="1px"
          borderBottomColor="gray.200"
          height={'16'}
          px={8}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex alignItems="center">
            <AppLogo width={45} />
            <Text as="span" lineHeight={3} fontSize={'xs'} ml={2} fontWeight={'bold'}>nos<br/>vocab</Text>
          </Flex>
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
      colorScheme="green"
      variant="outline"
      size={'sm'}
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
  console.log("🚀 ~ file: Header.tsx ~ line 63 ~ LoggedInButton ~ session", session)

  return (
    <>
      <Flex alignItems="center">
        <Text fontSize={'xs'}>{session?.user.name}</Text>
        <Avatar mx={3} size={'md'} src={session?.user.image} />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Profile"
            icon={<ChevronDownIcon />}
            size="sm"
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<InfoIcon />}>
              Profile
            </MenuItem>
            <MenuItem
              as="button"
              icon={<UnlockIcon />}
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