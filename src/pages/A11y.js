import {
  Stack,
  Box,
  Flex,
  Tag,
  Heading,
  Row,
  Kbd,
  Icon,
  Thead,
  Tbody,
  Tr,
  Td,
  Table,
  Th,
  HStack,
  Text,
  Badge,
} from '@chakra-ui/react';

import {
  FiArrowUp,
  FiArrowDown,
  FiArrowRight,
  FiArrowLeft,
} from 'react-icons/fi';

const boardHead = ['Command', 'Description'];

const boardBody = [
  [
    <Kbd>
      <Icon as={FiArrowUp} />
    </Kbd>,
    'Increase brightness',
  ],
  [
    <Kbd>
      <Icon as={FiArrowDown} />
    </Kbd>,
    'Decrease brightness',
  ],
  [
    <Kbd>
      <Icon as={FiArrowRight} />
    </Kbd>,
    'Increase saturation',
  ],
  [
    <Kbd>
      <Icon as={FiArrowLeft} />
    </Kbd>,
    'Decrease saturation',
  ],
  [
    <>
      <Kbd mr={1}>shift</Kbd>+<Kbd ml={1}>any arrow</Kbd>
    </>,
    'Increase or decrease by 10',
  ],
  [
    <>
      <Kbd>Home</Kbd> or
      <Kbd ml={2} mr={1}>
        fn
      </Kbd>
      +
      <Kbd ml={1}>
        <Icon as={FiArrowLeft} />
      </Kbd>
    </>,
    'Set saturation to 0',
  ],
  [
    <>
      <Kbd>End</Kbd> or
      <Kbd ml={2} mr={1}>
        fn
      </Kbd>
      +
      <Kbd ml={1}>
        <Icon as={FiArrowRight} />
      </Kbd>
    </>,
    'Set saturation to 100',
  ],
  [
    <>
      <Kbd>PgDown</Kbd> or
      <Kbd ml={2} mr={1}>
        fn
      </Kbd>
      +
      <Kbd ml={1}>
        <Icon as={FiArrowDown} />
      </Kbd>
    </>,
    'Set brightness to 0',
  ],
  [
    <>
      <Kbd>PgUp</Kbd> or
      <Kbd ml={2} mr={1}>
        fn
      </Kbd>
      +
      <Kbd ml={1}>
        <Icon as={FiArrowUp} />
      </Kbd>
    </>,
    'Set brightness to 100',
  ],
];

const BoardBody = () => {
  return (
    <Tbody>
      {boardBody.map((item, index) => {
        return (
          <Tr key={index}>
            <Td textAlign="right">{item[0]}</Td>
            <Td textAlign="left">{item[1]}</Td>
          </Tr>
        );
      })}
    </Tbody>
  );
};

const MyTable = (props) => {
  return (
    <Box p={2}>
      <HStack mb={3} align="baseline">
        <Heading size="md">{props.title}</Heading>
        <Badge
          ml={2}
          fontSize="0.7em"
          borderRadius="sm"
          variant="subtle"
          pl={2}
          pr={2}
        >
          Accessibility
        </Badge>
      </HStack>
      <Table
        variant="simple"
        colorScheme="gray"
        width="100%"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="gray.100"
        borderRadius="2px"
      >
        <Thead
          bg="gray.50"
          borderBottomColor="gray.100"
          borderBottomStyle="solid"
          borderBottomWidth="1px"
        >
          <Tr h="40px">
            <Th textAlign="right" fontWeight="extrabold">
              {boardHead[0]}
            </Th>
            <Th textAlign="left" fontWeight="extrabold">
              {boardHead[1]}
            </Th>
          </Tr>
        </Thead>
        {props.children}
      </Table>
    </Box>
  );
};

const A11y = () => {
  return (
    <Stack spacing={5} py={{ base: '5', md: '10' }}>
      <MyTable title="Board">
        <BoardBody />
      </MyTable>
      <MyTable title="Board">
        <BoardBody />
      </MyTable>
    </Stack>
  );
};

export default A11y;
