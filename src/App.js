import { Flex, Divider } from '@chakra-ui/react';
import Form from './components/Form';
import Pin from './components/Pin';
import InfoModal from './components/InfoModal';

function App() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="space-evenly"
      minH="100vh"
      w="full"
    >
      <Form />
      <Divider />
      <Pin />
    </Flex>
  );
}

export default App;
