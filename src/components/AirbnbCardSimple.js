import { Box, Text, Image, Badge, VStack, HStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const AirbnbCardSimple = () => {
  return (
    <VStack p={4}>
      <Text
        fontSize="lg"
        textAlign="center"
        lineHeight="normal"
        mb={5}
        color="twitter.900"
        maxWidth="sm"
      >
        With a bit of practice, you will able to design awesome components:
      </Text>
      <Box
        bgColor="white"
        rounded="lg"
        width="100%"
        height="auto"
        minHeight="sm"
        overflow="hidden"
        borderWidth="1px"
        borderColor="gray.100"
        shadow="base"
      >
        <Image
          size="100px"
          fallbackSrc="https://via.placeholder.com/150"
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          width="100%"
          height="auto"
          minHeight="245px"
        />
        <Box p={5}>
          <HStack mb={1}>
            <Badge
              variant="outline"
              colorScheme="teal"
              mr={2}
              rounded="lg"
              px={2}
            >
              NEW
            </Badge>
            <Text color="gray.500" fontSize="xs">
              3 BEDS • 2 BATHS
            </Text>
          </HStack>
          <Text fontWeight="bold" fontSize="xl">
            Modern home in city center
          </Text>
          <Text fontSize="sm" mb={3}>
            $119/night
          </Text>
          <HStack spacing={1} align="baseline">
            <Box as={StarIcon} color="yellow.400" mr={1} />
            <Text fontWeight="bold" mr={1}>
              4.84
            </Text>
            <Text fontSize="sm">(190)</Text>
          </HStack>
        </Box>
      </Box>
    </VStack>
  );
};

export default AirbnbCardSimple;
