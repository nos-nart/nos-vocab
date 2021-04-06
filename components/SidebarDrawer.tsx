import React from 'react';
import Link from 'next/link';
import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Flex,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import { AppLogo } from './AppLogo';

const SidebarDrawer = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        icon={<RiMenuLine size={25} />}
        aria-label="List"
        variant="ghost"
        size="md"
        onClick={onOpen}
        display={{ base: "inline-flex", xl: "none" }}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link href={'/'}>
              <a>
                <Flex alignItems="center" w={'full'}>
                  <AppLogo width={45} />
                  <Text as="span" lineHeight={3} fontSize={'xs'} ml={2} fontWeight={'bold'} textColor={'blue.500'}>nos<br/>vocab</Text>
                </Flex>
              </a>
            </Link>
          </DrawerHeader>
          <DrawerBody className="scrollbar" paddingX={0}>
            {/* <Menubar /> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SidebarDrawer;
