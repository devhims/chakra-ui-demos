import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
// import React, { useContext } from 'react';
import ContentWrapper from './ContentWrapper';
// import useTranslator from '../../useTranslator';
// import { AppContext } from '../../AppProvider';

import LiveDataFeed from '../data/LiveDataFeed';

const LiveData = ({ ...rest }) => {
  //   const { liveData } = useContext(AppContext);
  //   const { t } = useTranslator();
  //   const dataText = t('LiveData', { returnObjects: true });
  const colorCoding = ['yellow', 'green', 'red'];
  return (
    <ContentWrapper id="Live Data" heading="Live Data" {...rest} my={3}>
      <Box px={[4, 6]} py={{ base: '2', sm: '3' }}>
        <SimpleGrid columns={[1, 3]} spacing={[4, 6]}>
          {LiveDataFeed.map(({ data, value }, index) => (
            <Box
              key={index}
              bg={`${colorCoding[index]}.100`}
              px={4}
              py={2}
              rounded="md"
            >
              <Box
                color={`${colorCoding[index]}.500`}
                textAlign="right"
                fontWeight="thin"
                w={24}
              >
                <Text lineHeight="none" fontSize="2xl">
                  &bull;
                </Text>
              </Box>
              <Stack spacing={1}>
                <Text fontSize="2xl" fontWeight="extrabold">
                  {value}
                </Text>
                <Text>{data}</Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </ContentWrapper>
  );
};

export default LiveData;
