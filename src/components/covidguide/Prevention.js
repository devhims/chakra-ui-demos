import { Icon, Stack, Text, Image } from '@chakra-ui/react';
import ContentWrapper from './ContentWrapper';

import PreventionData from '../../data/PreventionData';

const Prevention = () => {
  return (
    <ContentWrapper
      id="Prevention"
      my={3}
      heading={PreventionData.heading}
      maxW="700px"
      mx={3}
    >
      <Stack spacing={[8, 6]} p={6}>
        {PreventionData.content.map((item, index) => {
          return (
            <Stack key={index} spacing={4} direction={['column', 'row']}>
              {/* <Icon color="green.500" name={item.icon} size="56px" /> */}
              <Image
                borderRadius="full"
                boxSize="50px"
                src={item.icon}
                alt="Segun Adebayo"
                bgColor="gray.200"
                p={2}
              />
              <Stack ml={[0, 6]}>
                <Text fontWeight="semibold">{item.title}</Text>
                <Text opacity={0.8}>{item.description}</Text>
              </Stack>
            </Stack>
          );
        })}
        <Text fontSize="xs" fontWeight="bold">
          {PreventionData.source}
        </Text>
      </Stack>
    </ContentWrapper>
  );
};

export default Prevention;
