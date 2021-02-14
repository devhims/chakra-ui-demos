import { Flex, Divider, VStack } from '@chakra-ui/react';
import Form from './components/Form';
import Pin from './components/Pin';
import InfoModal from './components/InfoModal';
import CardParent from './components/StatsParent';
import SiteBanner from './components/SiteBanner';
import Alert from './components/Alert';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TableSimple from './components/TableSimple';
import AirBnb from './components/AirbnbCard';

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
        <AirBnb />
        <Divider />
        <SiteBanner />
        <Divider />
        <Form />
        <Divider />
        <Pin />
        <Divider />
        <CardParent />
        <Divider />
        <TableSimple />
        <Divider />
      </Flex>
      <Footer />
    </>
  );
}

export default App;
