import { Flex, Divider, VStack } from '@chakra-ui/react';
import Form from './components/Form';
import Pin from './components/Pin';
import InfoModal from './components/InfoModal';
import CardParent from './components/StatsParent';
import SiteBanner from './components/SiteBanner';
import Alert from './components/Alert';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Alert />
      <NavBar />
      <Flex
        direction="column"
        align="center"
        justify="space-evenly"
        minH="100vh"
        w="full"
      >
        <SiteBanner />
        <Divider />
        <Form />
        <Divider />
        <Pin />
        <Divider />
        <CardParent />
        <Divider />
      </Flex>
      <Footer />
    </>
  );
}

export default App;
