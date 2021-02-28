import { Badge, Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';

import data from '../../data/MythsAndFactsData';

const MythsAndFacts = ({ ...rest }) => {
  return (
    <Stack
      id="Debunking Myths"
      px={6}
      py={10}
      bg="blue.50"
      rounded="lg"
      {...rest}
      maxW="700px"
    >
      <Text fontSize="lg" fontWeight="semibold">
        Myths & facts
      </Text>
      <SimpleGrid columns={[1, 2]} spacing={3} mt={3}>
        {data.map((item, index) => (
          <Stack key={index} mt={3} spacing={6} p={5} bg="white" rounded="lg">
            <Stack>
              <Box>
                <Badge
                  py={1}
                  px={2}
                  colorScheme="red"
                  variant="solid"
                  textTransform="uppercase"
                >
                  {item.false}
                </Badge>
              </Box>
              <Text fontSize="sm" fontWeight="bold">
                {item.myth}
              </Text>
            </Stack>
            <Stack>
              <Box>
                <Badge
                  py={1}
                  px={2}
                  colorScheme="green"
                  variant="solid"
                  textTransform="uppercase"
                >
                  {item.true}
                </Badge>
              </Box>
              <Text fontSize="sm">{item.fact}</Text>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default MythsAndFacts;
