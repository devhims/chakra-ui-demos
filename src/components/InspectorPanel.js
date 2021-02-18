import {
  Stack,
  Box,
  Flex,
  Heading,
  Tag,
  Text,
  VStack,
  HStack,
  Container,
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';

const InspectorPanel = () => {
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
      <VStack>
        <HStack alignSelf="flex-end">
          <Heading
            size="md"
            as="h2"
            lineHeight="shorter"
            fontWeight="bold"
            fontFamily="heading"
          >
            Inspector
          </Heading>
          <Box as={ChevronRightIcon} />
        </HStack>
        <VStack spacing={6} pl={6}>
          <Box>
            <Tag size="md" variant="subtle" colorScheme="yellow" rounded="sm">
              Update props & style
            </Tag>
            <Container fontSize="md" color="gray.600" mt={2}>
              On the right hand side, you can find the inspectror panel. You
              will find the tools to edit the component's props and style.
            </Container>
          </Box>
          <Box>
            <Tag size="md" variant="subtle" colorScheme="yellow" rounded="sm">
              Delete, reset and read doc
            </Tag>
            <Container color="gray.600" mt={2}>
              Reach the yellow bar on the top to delete, reset and access the
              Chakra doc of each component.
            </Container>
          </Box>
          <Box>
            <Tag size="md" variant="subtle" colorScheme="yellow" rounded="sm">
              Sort components
            </Tag>
            <Container color="gray.600" mt={2}>
              By clicking on a component containing children, you will see a
              Children panel appearing on the right. It enables sorting the
              children.{' '}
            </Container>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};

export default InspectorPanel;
