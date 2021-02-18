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

const EditorPanel = () => {
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
      <VStack ml={6}>
        <Heading
          size="md"
          lineHeight="shorter"
          fontWeight="bold"
          fontFamily="heading"
          alignSelf="flex-start"
        >
          Editor
        </Heading>
        <VStack alignItems="flex-start" spacing={6}>
          <Box>
            <Tag size="md" variant="subtle" colorScheme="facebook" rounded="sm">
              Builder mode
            </Tag>
            <Container color="gray.600" mt={2}>
              The Builder mode adds extra padding/border to ease components
              selection (like containers).
            </Container>
          </Box>
          <Box>
            <Tag size="md" variant="subtle" colorScheme="facebook" rounded="sm">
              Code Panel
            </Tag>
            <Container color="gray.600" mt={2}>
              Toggle the code panel for viewing the JSX/React code of your
              components. You can even export your code directly to CodeSandbox!
            </Container>
          </Box>

          <Tag size="md" variant="subtle" colorScheme="facebook" rounded="sm">
            Shortcuts
          </Tag>
          <VStack pl={4} alignItems="baseline">
            <HStack isInline shouldWrapChildren>
              <Tag size="sm" variant="subtle">
                cmd+z
              </Tag>
              <Tag size="sm" variant="subtle" variantColor="gray">
                ctrl+z
              </Tag>
              <Text color="gray.600">Undo</Text>
            </HStack>
            <HStack shouldWrapChildren isInline>
              <Tag size="sm" variant="subtle" variantColor="gray">
                cmd+y
              </Tag>
              <Tag size="sm" variant="subtle" variantColor="gray">
                ctrl+y
              </Tag>
              <Text color="gray.600">Redo</Text>
            </HStack>
            <HStack isInline shouldWrapChildren>
              <Tag size="md" variant="subtle" variantColor="gray">
                b
              </Tag>
              <Text color="gray.600">Toggle Builder mode</Text>
            </HStack>
            <HStack isInline shouldWrapChildren>
              <Tag size="sm" variant="subtle" variantColor="gray">
                c
              </Tag>
              <Text color="gray.600">Toggle Code panel</Text>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default EditorPanel;
