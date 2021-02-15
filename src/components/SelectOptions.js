import React, { useState, useEffect } from 'react';
import { Select, useToast } from '@chakra-ui/react';

const SelectOptions = () => {
  const [topping, setTopping] = useState('default');
  const toast = useToast();

  useEffect(() => {
    if (!topping) {
      toast({
        title: 'No membership plan selected',
        description: 'Please pick the plan that suits your need',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [topping]);

  return (
    <Select
      placeholder="Choose a membership"
      m={4}
      onChange={(e) => setTopping(e.target.value)}
      isRequired
      isClosable
    >
      <option value="700">Rs 700 charged monthly</option>
      <option value="3500">Rs 3500 charged anually</option>
      <option value="100">Rs 100 per module</option>
    </Select>
  );
};

export default SelectOptions;
