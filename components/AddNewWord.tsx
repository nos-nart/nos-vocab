import React from 'react';
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { PlusIcon, CheckIcon, CancelIcon } from './svgs';
 
export const AddNewWord = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        size="sm"
        colorScheme={'facebook'}
        leftIcon={<PlusIcon width={20} />}
        onClick={onOpen}
      >
        Add
      </Button>
      <Modal
        size={'2xl'}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new word to your learning process</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This is the modal content
          </ModalBody>

          <ModalFooter display={'flex'} justifyContent={'space-between'}>
            <Button
              mr={3}
              size="sm"
              // leftIcon={<CancelIcon width={20} />}
              variant={'ghost'}
              // colorScheme={'purple'}
              onClick={onClose}
            >
              cancel
            </Button>
            <Button
              size="sm"
              // variant={'outline'}
              colorScheme={'green'}
              leftIcon={<CheckIcon width={20} />}
            >
              add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
