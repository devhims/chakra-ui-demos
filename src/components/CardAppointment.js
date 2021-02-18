import { Box, HStack, Image, Text, Tag, Button } from '@chakra-ui/react';

const CardAppointment = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      padding={4}
      bg="white"
      m={4}
      shadow="base"
    >
      <HStack spacing="6" align="center">
        <Image
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          w="120px"
          h="160px"
          borderRadius="lg"
          objectFit="cover"
          alt="a man"
        />
        <Box role="group">
          <Text fontSize="lg" fontWeight="medium" color="primary.700">
            Tarot Reading and Meditation
          </Text>
          <Text mt="1" color="primary.800">
            <b>From $142</b>/person
          </Text>
          <HStack mt="3" spacing="3">
            {['1:30PM', '2:30PM', '3:30PM'].map((time, index) => (
              <Tag
                key={index}
                bg="primary.100"
                p="3"
                borderRadius="lg"
                fontWeight="bold"
              >
                {time}
              </Tag>
            ))}
          </HStack>
          <Button
            variant="solid"
            colorScheme="purple"
            w="100px"
            h="40px"
            mt={3}
          >
            Book Now
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default CardAppointment;
