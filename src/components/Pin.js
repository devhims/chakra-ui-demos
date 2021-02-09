import React, { useState } from 'react';
import { PinInput, PinInputField, Flex, Heading } from '@chakra-ui/react';
import InfoModal from './InfoModal';

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
    <>
      <Heading as="h4" size="md" p={3}>
        Enter secret code (a1234b) to continue
      </Heading>
      <Flex direction="row">
        <PinInput mask type="alphanumeric" onComplete={handleComplete}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </Flex>
    </>
  );
};

export default Pin;
