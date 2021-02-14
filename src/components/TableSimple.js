import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  useColorModeValue as mode,
  Flex,
  Box,
} from '@chakra-ui/react';

import React from 'react';

const columns = ['To convert', 'into', 'multiply by'];

const data = [
  ['inches', 'millimetres (mm)', '25.4'],
  ['feet', 'centimetres (cm)', '30.48'],
  ['yards', 'metres (m)', '0.91444'],
];

const TableSimple = () => {
  return (
    <Box maxW="container.lg" textAlign="center" p={4}>
      <Table variant="simple" size="md" bgColor={mode('gray.100', 'gray.500')}>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr bg={mode('linkedin.800', 'linkedin.500')}>
            {columns.map((title, index) => {
              return (
                <Th
                  isNumeric={title === 'multiply by' ? true : false}
                  key={index}
                  fontWeight="bold"
                  textColor="white"
                >
                  {title}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((entry, index) => {
            return (
              <Tr key={index}>
                <Td>{entry[0]}</Td>
                <Td>{entry[1]}</Td>
                <Td isNumeric>{entry[2]}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableSimple;
