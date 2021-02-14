import { Box, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react';
import { StatCard } from './StatCard';

const data = [
  { label: 'Total Subscribers', value: '71,887' },
  { label: 'Avg. Open Rate', value: '56.87%' },
  { label: 'Avg. Click Rate', value: '12.87%' },
];

const CardParent = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} p="10" my={4}>
      <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="10">
          {data.map((stat, id) => (
            <StatCard key={id} data={stat} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default CardParent;
