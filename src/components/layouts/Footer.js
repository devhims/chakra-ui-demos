import { Box, Button, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
// import React, { useContext } from 'react';
// import useTranslator from '../useTranslator';
// import { AppContext } from '../AppProvider';

import { FiCloudDrizzle } from 'react-icons/fi';

const shareButtons = [
  {
    button: 'Facebook',
    icon: <FiCloudDrizzle />,
    link: 'https://www.facebook.com/sharer/sharer.php?u=www.covidguide.africa',
  },
  {
    button: 'LinkedIn',
    icon: <FiCloudDrizzle />,
    link: 'https://www.facebook.com/sharer/sharer.php?u=www.covidguide.africa',
  },
  {
    button: 'Twitter',
    icon: <FiCloudDrizzle />,
    link: 'https://www.facebook.com/sharer/sharer.php?u=www.covidguide.africa',
  },
  {
    button: 'WhatsApp',
    icon: <FiCloudDrizzle />,
    link: 'https://www.facebook.com/sharer/sharer.php?u=www.covidguide.africa',
  },
];

const Footer = () => {
  //   const { t } = useTranslator();
  //   const { shareButtons } = useContext(AppContext);

  return (
    <Box bg="green.100" minH={360} px={6}>
      <Box maxW="1680px" mx="auto" pb={10}>
        <Stack spacing={[8, 12]} mx="auto" maxW="720px" align="center">
          <Box rounded="full" p={10} bg="white" mt={-20} textAlign="center">
            <Icon as={FiCloudDrizzle} boxSize={6} />
          </Box>
          <Text fontSize="xl" fontWeight="medium">
            Share with family and friends
          </Text>
          <SimpleGrid columns={[1, 2, 4]} spacing={6} w="100%">
            {shareButtons.map(({ button, icon, link, action }) => (
              <Button
                key={button}
                isFullWidth
                as="a"
                href={link}
                // dataAction={action}
                size="lg"
                colorScheme={button.toLowerCase()}
                leftIcon={icon}
              >
                {button}
              </Button>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
