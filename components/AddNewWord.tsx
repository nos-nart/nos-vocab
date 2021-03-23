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
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useSWR, { mutate } from 'swr';
import { fetcher } from '@/utils/fetcher';
import fetch from 'unfetch';
import { useSession } from 'next-auth/client';

import { PlusIcon, CheckIcon } from './svgs';
 
export const AddNewWord = (): JSX.Element => {
  const [session] = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { handleSubmit, errors, register, formState } = useForm();
  const { data } = useSWR('/api/words/myword', fetcher);

  const onSubmit = async (values: {[key: string]: string}) => {
    const newWord = {
      word: values.word,
      creator: session.user.id,
      creatorName: session.user.name
    };
    mutate('/api/words/myword', { myWords: [...data.myWords, newWord] }, false);
    await fetch('/api/words/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newWord)
    });
    mutate('/api/words/myword');
    toast({
      title: "word added.",
      description: "successfully add a new word",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
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
                  autoComplete="off"
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
