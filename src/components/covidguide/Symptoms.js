import { Box, Button, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import ContentWrapper from './ContentWrapper';

import { SymptomsInfo, SymptomsAction } from '../../data/SymptomsInfo';

const Symptoms = ({ ...rest }) => {
  return (
    <Stack spacing={8} id="Symptoms">
      <ContentWrapper heading="Symtoms of Corona Virus" {...rest}>
        <Box px={6} py={3}>
          <SimpleGrid columns={[2, 3]} spacing={6}>
            {SymptomsInfo.map((symptom) => (
              <Stack
                key={symptom.name}
                p={5}
                spacing={3}
                borderWidth="2xs"
                rounded="md"
              >
                <Icon as={symptom.icon} boxSize={6} />
                <Text>{symptom.name}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Box>
      </ContentWrapper>

      <Stack spacing={6} bg="lightsteelblue" px={6} py={10} rounded="lg">
        <Text fontSize="xl" fontWeight="semibold">
          Have symptoms? Don't panic
        </Text>

        <SimpleGrid columns={[1, 3]} spacing={[5, 3]}>
          {SymptomsAction.map(({ name, icon, buttonText }) => (
            <Stack
              key={name}
              justify="space-evenly"
              align="center"
              spacing={6}
              py={8}
              px={6}
              bg="white"
              rounded="lg"
              textAlign="center"
            >
              <Icon as={icon} boxSize={10} />
              <Text>{name}</Text>

              <Button variant="outline" variantColor="green">
                {buttonText}
              </Button>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default Symptoms;
