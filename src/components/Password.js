import React, { useState } from 'react';
import {
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';

import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import theme from '../theme';

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl isRequired>
      <InputGroup bgColor={theme.bgColor} rounded="lg">
        <InputLeftAddon>
          <LockIcon />
        </InputLeftAddon>
        <Input
          type={`${showPassword ? 'text' : 'password'}`}
          placeholder="Password"
          aria-label="password"
        />
        <InputRightElement width="3rem">
          <IconButton
            icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
            variant="ghost"
            onClick={() => setShowPassword(!showPassword)}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default Password;
