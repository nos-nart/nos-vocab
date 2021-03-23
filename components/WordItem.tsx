import React from 'react';
import {
  Button,
  IconButton,
  Box,
  Flex,
  Text,
  Checkbox,
  Link,
  Tooltip,
  useColorMode
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import dayjs from 'dayjs';
import { useSession } from 'next-auth/client';

import { StarIcon, MinusSquareIcon, NotepadIcon } from './svgs';
import { DATETIME_FORMAT } from '@/config/index';
import OxfordIcon from '../svg/oxford.svg';
import CambridgeIcon from '../svg/cambridge.svg';

interface Word {
  word?: string,
  createdAt?: string,
  addBy?: string,
}

type WordItemProps = {
  word?: Word
  showRemove?: boolean
}

export const WordItem = ({word, showRemove}: WordItemProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      mb={1}
      py={1} px={2} w={'full'}
      border="1px" borderRadius={'md'}
      borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
    >
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Text fontSize={'lg'} fontWeight={'bold'}>{word.word}</Text>
        <Box display={'flex'} alignItems={'center'}>
          <Tooltip label="add to favorite" placement="bottom" bg="gray.300" color="black">
            <IconButton
              size={'sm'}
              variant={'ghost'}
              color={'#ccd0d5'}
              aria-label="star"
              icon={<StarIcon width={20} />}
            />
          </Tooltip>
          <Tooltip label="add to learning" placement="bottom" bg="gray.300" color="black">
            <IconButton
              size={'sm'}
              variant={'ghost'}
              colorScheme={'blue'}
              aria-label="note-pad"
              icon={<NotepadIcon width={20} />}
            />
          </Tooltip>
          {
            showRemove && <Tooltip label="remove this word" placement="bottom" bg="gray.300" color="black">
              <IconButton
                size={'sm'}
                variant={'ghost'}
                color={'#F87171'}
                aria-label="minus-square"
                icon={<MinusSquareIcon width={20} />}
              />
            </Tooltip>
          }
          <Checkbox ml={2} size="md" colorScheme={'green'} defaultIsChecked>
            <Text fontSize={'xs'}>{'learned'}</Text>
          </Checkbox>
        </Box>
      </Flex>
      <Flex justifyContent={'space-between'} alignItems={'flex-end'} fontSize={'xs'} color={'gray.500'}>
        <Box display={'flex'} flexDir={'column'} alignItems={'flex-start'}>
          <Link
            href={`https://www.oxfordlearnersdictionaries.com/definition/english/impersonate?q=${word.word}`}
            color={'#3B82F6'} isExternal>
            oxford learner dictionary <ExternalLinkIcon mx="2px" />
          </Link>
          <Link
            href={`https://dictionary.cambridge.org/dictionary/english/${word.word}`}
            color={'#7C3AED'} isExternal>
            dictionary cambridge <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>
        <Box display={'flex'} flexDir={'column'} alignItems={'flex-end'}>
          <Text>created at: {dayjs(word.createdAt).format(DATETIME_FORMAT.l)}</Text>
          <Text>add by: {word.addBy || '-'}</Text>
        </Box>
      </Flex>
    </Box>
  )
}
