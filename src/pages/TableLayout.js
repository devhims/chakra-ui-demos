import {
  Flex,
  Link,
  Icon,
  Heading,
  FormControl,
  FormLabel,
  Switch,
  Box,
} from '@chakra-ui/react';
import { FiGithub, FiCodesandbox } from 'react-icons/fi';

import React, { useState } from 'react';
import A11y from './A11y';

const TableLayout = () => {
  const [showParams, setShowParams] = useState(true);
  const [showPreview, setShowPreview] = useState(true);
  return (
    <Flex
      m="auto"
      direction="column"
      pos="relative"
      maxWidth="600px"
      overflow="hidden"
      justifyContent="space-evenly"
    >
      <Flex pos="absolute" right={4} top={{ base: '0', md: '1' }}>
        <Link
          isExternal
          m={4}
          mr={0}
          href="https://github.com/deebov/atomik-color-picker"
        >
          <Icon
            color="white"
            bg="black"
            w="40px"
            h="40px"
            p="6px"
            borderRadius="10px"
            as={FiGithub}
          />
        </Link>
      </Flex>
      <Box h="100vh" overflow="scroll">
        <A11y />
      </Box>
    </Flex>
  );
};

export default TableLayout;
