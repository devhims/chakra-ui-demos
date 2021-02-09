import { Flex } from '@chakra-ui/react';
import Form from './components/Form';

function App() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      w="full"
    >
      <Form />
    </Flex>
  );
}

export default App;
