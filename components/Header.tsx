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
import { signIn, signOut, useSession } from 'next-auth/client';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import GoogleIcon from '../svg/googleicon.svg';
import { FiLogOut } from "react-icons/fi";
import { RiUser5Fill, RiArrowDownSLine, RiLayoutLeft2Line } from "react-icons/ri";

type HeaderProps = {
  isMinimized?: boolean;
  setIsMinimized?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ isMinimized, setIsMinimized }: HeaderProps): JSX.Element => {
  const [session] = useSession();
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        w={'full'}
        position={'sticky'}
        top={0}
        background={colorMode === "light" ? "gray.300" : "gray.900"}
        borderBottom={"1px"}
        borderBottomColor={colorMode === "light" ? "transparent" : "gray.700"}
        px={8}
        py={2}
        zIndex="50"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <IconButton
            variant={'ghost'}
            aria-label="layout"
            icon={<RiLayoutLeft2Line size={25} />}
            onClick={() => setIsMinimized(!isMinimized)}
          />
          <Box display="flex" alignItems="center">
            <ColorModeSwitcher justifySelf="flex-end" mr={4} />
            {!session && <LoginButton />}
          {session && <LoggedInButton />}
          </Box>
        </Flex>
      </Box>
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
            icon={<RiArrowDownSLine size={20} />}
            size="sm"
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<RiUser5Fill size={20} />}>
              Profile
            </MenuItem>
            <MenuItem
              as="button"
              icon={<FiLogOut size={20} />}
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