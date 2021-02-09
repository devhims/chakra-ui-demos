import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Button,
  FormControl,
} from '@chakra-ui/react';

import theme from '../theme';
import Password from './Password';

import { EmailIcon } from '@chakra-ui/icons';

const SignIn = () => {
  return (
    <form>
      <Stack>
        <FormControl isRequired>
          <InputGroup bgColor={theme.bgColor} rounded="lg">
            <InputLeftAddon>
              <EmailIcon />
            </InputLeftAddon>
            <Input type="email" placeholder="Email" aria-label="email" />
          </InputGroup>
        </FormControl>

        <Password />

        <Button
          type="submit"
          colorScheme="linkedin"
          boxShadow="md"
          _hover={{ boxShadow: 'lg' }}
        >
          Log In
        </Button>
      </Stack>
    </form>
  );
};

export default SignIn;
