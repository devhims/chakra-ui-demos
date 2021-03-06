import {
  Flex,
  Box,
  Heading,
  Link,
  Text,
  VStack,
  Input,
  Select,
  Button,
} from '@chakra-ui/react';

const HalfLife = () => {
  return (
    <Flex
      bg="white"
      direction={{ base: 'column', md: 'row' }}
      rounded="lg"
      borderWidth="1px"
      shadow="lg"
      m={4}
      p={4}
    >
      <Box flex="1" px="6" py="3">
        <Heading mb="4">
          Earn up to{' '}
          <Box as="span" color="pink.600">
            $ﺩ.ﺇ6,590{' '}
          </Box>
          a month hosting in Dubai
        </Heading>
        <Link textDecor="underline" fontSize="sm">
          How we estimate your earnings potential
        </Link>
      </Box>
      <Box flex="1" px="6" pt="3" pb="7">
        <Text fontSize="sm">
          Tell us more about your place and we'll update your estimate
        </Text>
        <Box mt="6">
          <form>
            <VStack spacing="3">
              <Input placeholder="Address" />
              <Select placeholder="Enter Place">
                <option value="all">Place 1</option>
                <option value="all">Place 2</option>
              </Select>
              <Select defaultValue="all">
                <option value="all">City 1</option>
                <option value="all">City 2</option>
              </Select>
            </VStack>
            <Button
              mt="8"
              width="100%"
              rounded="lg"
              variant="solid"
              size="lg"
              colorScheme="pink"
            >
              Start your listing
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default HalfLife;
