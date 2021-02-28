import { Box, Button, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
// import React, { useContext } from 'react';
// import useTranslator from '../useTranslator';
// import { AppContext } from '../AppProvider';

import { FiCloudDrizzle } from 'react-icons/fi';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsAppIcon,
  Corona,
} from '../../assets/IconsV1';

const shareButtons = [
  {
    button: 'Facebook',
    icon: <FacebookIcon pb={1} boxSize={5} />,
    link: 'https://www.facebook.com/sharer/sharer.php?u=www.covidguide.africa',
  },
  {
    button: 'LinkedIn',
    icon: <LinkedinIcon pb={1} boxSize={5} />,
    link: 'https://www.facebook.com/sharer/sharer.php?u=www.covidguide.africa',
  },
  {
    button: 'Twitter',
    icon: <TwitterIcon pb={1} boxSize={5} />,
    link: 'https://www.facebook.com/sharer/sharer.php?u=www.covidguide.africa',
  },
  {
    button: 'WhatsApp',
    icon: <WhatsAppIcon pb={1} boxSize={5} />,
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
          <Box rounded="full" p={7} bg="white" mt={-14} textAlign="center">
            <Corona boxSize={12} />
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
