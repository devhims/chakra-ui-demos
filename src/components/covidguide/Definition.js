import { Box, Divider, Stack, Text } from '@chakra-ui/react';
import ContentWrapper from './ContentWrapper';

const Definition = ({ ...rest }) => {
  return (
    <ContentWrapper heading="What is Corona Virus" {...rest} mx={3} my={3}>
      <Box maxW="700px">
        <Text px={6} py={2}>
          Coronavirus (COVID-19) is a infectious disease caused by a new virus
          that began in Wuhan, China in December 2019. The disease causes
          respiratory illness (like the flu) with symptoms such as cough, fever,
          and in some severe cases, difficulty in breathing.
        </Text>
        <Divider />
        <Stack px={6} py={2}>
          <Text fontWeight="semibold">How it spreads?</Text>
          <Text>
            Coronavirus disease spreads primarily through contact with an
            infected person when they cough or sneeze. It also spreads when a
            person touches a surface or object that has the virus on it, then
            touches their eyes, nose or mouth.
          </Text>
        </Stack>
      </Box>
    </ContentWrapper>
  );
};

export default Definition;
