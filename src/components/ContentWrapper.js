import { Box, Text } from '@chakra-ui/react';

const ContentWrapper = ({ heading, children, ...rest }) => {
  return (
    <Box borderWidth="thin" borderRadius="8px" {...rest}>
      <Box borderBottomWidth="thin">
        <Text fontWeight="semibold" px={6} py={3}>
          {heading}
        </Text>
      </Box>
      <Box py={3}>{children}</Box>
    </Box>
  );
};

export default ContentWrapper;
