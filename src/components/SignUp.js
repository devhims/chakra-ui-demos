import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Button,
  FormControl,
  Divider,
} from '@chakra-ui/react';

import { EmailIcon, LockIcon, InfoIcon, EditIcon } from '@chakra-ui/icons';
import theme from '../theme';
import Password from './Password';

const SignUp = () => {
  return (
    <form action="submit">
      <Stack>
        <FormControl isRequired>
          <InputGroup bgColor={theme.bgColor} rounded="lg">
            <InputLeftAddon>
              <InfoIcon />
            </InputLeftAddon>
            <Input
              type="name"
              placeholder="First Name"
              aria-label="first name"
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup bgColor={theme.bgColor} rounded="lg">
            <InputLeftAddon>
              <InfoIcon />
            </InputLeftAddon>
            <Input type="name" placeholder="Last Name" aria-label="last name" />
          </InputGroup>
        </FormControl>

        <Divider borderColor="gray.400" />

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
          Sign Up
        </Button>
      </Stack>
    </form>
  );
};

export default SignUp;
