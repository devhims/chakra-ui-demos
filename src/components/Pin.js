import React, { useState } from 'react';
import {
  PinInput,
  PinInputField,
  Heading,
  HStack,
  Box,
  Stack,
  Center,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import InfoModal from './InfoModal';
import theme from '../theme';

const SECRET_PIN = 'a1234b';

const Pin = () => {
  const [pin, setPin] = useState('');
  const handleComplete = (val) => {
    setPin(val);
    console.log(val);
  };

  if (pin) {
    if (pin === SECRET_PIN) {
      console.log('success');
    } else {
      console.log('failure');
      return <InfoModal result="Incorrect PIN entered" />;
    }
  }

  return (
    <Box my={4}>
      <Heading as="h4" size="md" p={3}>
        Enter secret code (a1234b) to continue
      </Heading>
      <Center>
        <HStack>
          <PinInput
            mask
            type="alphanumeric"
            onComplete={handleComplete}
            focusBorderColor={mode('blue.400', 'whiteAlpha')}
          >
            {Array(6)
              .fill('')
              .map((_, i) => {
                return (
                  <PinInputField
                    key={i}
                    borderColor={mode('gray.300', 'white')}
                  />
                );
              })}
          </PinInput>
        </HStack>
      </Center>
    </Box>
  );
};

export default Pin;
