import {
  Box,
  Image,
  Flex,
  Badge,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';

const AirBnb = () => {
  return (
    <Box p="5" maxW="320px" borderWidth="1px" m={4} borderRadius="md">
      <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="pink">Plus</Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color={mode('pink.800', 'pink.300')}
        >
          Verified &bull; Cape Town
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        Modern, Chic Penthouse with Mountain, City & Sea Views
      </Text>
      <Text mt={2}>$119/night</Text>
      <Flex mt={2} align="center">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontSize="sm">
          <b>4.84</b> (190)
        </Text>
      </Flex>
    </Box>
  );
};

export default AirBnb;
