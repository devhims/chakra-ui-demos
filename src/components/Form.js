import {
  Box,
  Image,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';

import SignUp from './SignUp';
import SignIn from './SignIn';
import ThemeSelector from './ThemeSelector';
import theme from '../theme';

const Form = () => {
  return (
    <Box
      bgColor={theme.bgColor}
      w="350px"
      p={3}
      shadow="base"
      rounded="lg"
      my={4}
    >
      <ThemeSelector />
      <Image src={'./logo512.png'} w="80px" mx="auto" my={4} />
      <Tabs isFitted variant="enclosed-colored">
        <TabList mb="1em">
          <Tab>Sign Up</Tab>
          <Tab>Log In</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignUp />
          </TabPanel>
          <TabPanel>
            <SignIn />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Form;
