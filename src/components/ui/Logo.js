import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const Logo = (props) => {
  return (
    <Box {...props}>
      <Image
        src="logo192.png"
        maxW={{ base: '30px', md: '50px' }}
        objectFit="cover"
      />
    </Box>
  );
};

export default Logo;
