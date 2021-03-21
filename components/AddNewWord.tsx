import React from 'react';
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Box,
  useDisclosure
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useSWR from 'swr';

import { PlusIcon, CheckIcon } from './svgs';
 
export const AddNewWord = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, errors, register, formState } = useForm();

  const onSubmit = (values) => {
    console.log('values ~> ', values);
  };

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
            {/* NOTE: add new word form*/}
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.word}>
                <FormLabel htmlFor={'word'}>word</FormLabel>
                <Input
                  name="word"
                  placeholder="Enter a word"
                  ref={register({
                    required: {
                      value: true,
                      message: 'required this field'
                    }
                  })}
                />
                <FormErrorMessage>
                  {errors.word && errors.word.message}
                </FormErrorMessage>
              </FormControl>
              <Box display={'flex'} justifyContent={'space-between'} my={4}>
                <Button
                  mr={3}
                  size="sm"
                  variant={'ghost'}
                  onClick={onClose}
                >
                  cancel
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  colorScheme={'green'}
                  leftIcon={<CheckIcon width={20} />}
                >
                  add
                </Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
