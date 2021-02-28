import {
  Box,
  Divider,
  Flex,
  Icon,
  Text,
  Stack,
  useTheme,
} from '@chakra-ui/react';

import { FiCloudDrizzle } from 'react-icons/fi';

const Header = () => {
  return (
    <Box
      px={6}
      py={1}
      top={0}
      bg="white"
      pos="sticky"
      zIndex="sticky"
      borderBottomWidth="2xs"
    >
      <Flex maxW="1200px" fontSize="lg" mx="auto" justify="space-between">
        <Logo as="a" href="/" />
        <WhatsappButton as="a" href="https://bit.ly/3bqNpPr" ml={4} />
        {/* <Flex align="center">
            <Divider d={["none", "block"]} height={8} orientation="vertical" />
            <TelePhone />
          </Flex> */}
      </Flex>
    </Box>
  );
};

export function Logo({ ...rest }) {
  const { colors } = useTheme();
  return (
    <Stack
      isInline
      align="center"
      py={3}
      fontSize="2xl"
      fontWeight="extrabold"
      {...rest}
    >
      <Icon as={FiCloudDrizzle} boxSize={6} />
      <Box>
        <span style={{ color: colors.green['500'] }}>Covid</span>guide.africa
      </Box>
    </Stack>
  );
}

function HeaderItemWrapper({ children, onClick, ...rest }) {
  return (
    <Box
      p={3}
      onClick={onClick}
      rounded="lg"
      _hover={{ cursor: 'pointer', bg: 'gray.100', color: 'gray.700' }}
      {...rest}
    >
      {children}
    </Box>
  );
}

function WhatsappButton({ ...rest }) {
  return (
    <HeaderItemWrapper {...rest}>
      <Icon boxSize={5} as={FiCloudDrizzle} />
    </HeaderItemWrapper>
  );
}

// function TelePhone({ tel = "+234 706 005 2593" }) {
//   return (
//     <HeaderItemWrapper d={["none", "block"]} as="a" href={`tel:${tel.trim()}`}>
//       <Text fontWeight="medium">{tel}</Text>
//     </HeaderItemWrapper>
//   );
// }

export default Header;
