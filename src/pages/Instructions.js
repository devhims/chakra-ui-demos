import React from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  Icon,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Grid,
  Switch,
  InputGroup,
  InputRightElement,
  Flex,
  Tag,
  Heading,
  VStack,
  HStack,
} from '@chakra-ui/react';

import AirbnbCardSimple from '../components/AirbnbCardSimple';
import ComponentPanel from '../components/ComponentPanel';
import InspectorPanel from '../components/InspectorPanel';
import EditorPanel from '../components/EditorPanel';

const Instructions = () => (
  <>
    <VStack mt={4}>
      <HStack align="flex-start">
        <Text fontSize={['2xl', '2xl', '3xl', '3xl']} fontWeight="bold">
          ⚡️Welcome in OpenChakra
        </Text>
        <Badge variant="subtle" colorScheme="pink" ml={1}>
          BETA
        </Badge>
      </HStack>
      <Text color="gray.500">The Visual Editor for Chakra UI</Text>
    </VStack>
    <Grid
      p={[2, 2, 5, 10]}
      gap={[2, 2, 2, 5]}
      //   templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
      templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
    >
      <ComponentPanel />
      <InspectorPanel />
      <EditorPanel />
      <AirbnbCardSimple />
    </Grid>
  </>
);

export default Instructions;
