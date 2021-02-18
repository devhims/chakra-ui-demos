import {
  Stack,
  Box,
  Flex,
  Heading,
  Tag,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  VStack,
  HStack,
  Container,
} from '@chakra-ui/react';

import { ChevronLeftIcon } from '@chakra-ui/icons';

const ComponentPanel = () => {
  return (
    <Box
      backgroundColor="white"
      borderRadius="lg"
      border="1px"
      borderColor="gray.100"
      pl={3}
      pr={3}
      pt={5}
      pb={5}
      shadow="base"
      m={4}
    >
      <VStack spacing={6} justify="left" align="flex-start">
        <HStack pb={2} alignSelf="flex-start">
          <Box as={ChevronLeftIcon} />
          <Heading
            size="md"
            lineHeight="shorter"
            fontWeight="bold"
            fontFamily="heading"
          >
            Component Panel
          </Heading>
        </HStack>
        <Stack spacing={6} pl={6}>
          <Box>
            <Tag
              size="md"
              variant="subtle"
              colorScheme="whatsapp"
              rounded="sm"
              fontSize="sm"
            >
              Drag and Drop!
            </Tag>
            <Container fontSize="md" color="gray.600" mt={2}>
              Drag any component from the left hand panel into this editor. Then
              start interacting with them: try to drop the Avatar component in
              this box…
            </Container>
          </Box>
          <Box
            width="200px"
            backgroundColor="gray.100"
            borderRadius="lg"
            minHeight="60px"
            alignSelf="flex-start"
          />
          <Box>
            <Tag
              size="md"
              rounded="sm"
              variant="subtle"
              colorScheme="whatsapp"
              fontSize="sm"
            >
              Preset
            </Tag>
            <Container color="gray.600" mt={2}>
              A preset is a group of components (like Alert). Just drop a preset
              to easily setup a complexe component like this:
            </Container>
          </Box>

          <Alert variant="left-accent" status="success">
            <AlertIcon />
            <AlertTitle mr={2}>Alert!</AlertTitle>
            <AlertDescription>I'm an Alert preset</AlertDescription>
          </Alert>
        </Stack>
      </VStack>
    </Box>
  );
};

export default ComponentPanel;
