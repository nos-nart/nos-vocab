import React from 'react';
import { Flex, Text, Box, Button, Avatar } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client';

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
          callbackUrl: `/`,
        });
      }}
    >
      <Text mr={2}>Log in</Text>
      <GoogleIcon width={25}/>
    </Button>
  )
}

function LoggedInButton() {
  const [session] = useSession();

  return (
    <>
      <Flex alignItems="center">
        <Avatar size={'md'} src="https://bit.ly/broken-link" />
        <Button onClick={() => signOut({ callbackUrl: "/" })}>Log out</Button>
      </Flex>
    </>
  )
}