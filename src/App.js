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
import SelectOptions from './components/SelectOptions';
import BlogList from './components/BlogList';
import CardAppointment from './components/CardAppointment';
import HalfLife from './components/HalfLife';
import ComponentPanel from './components/ComponentPanel';

import Instructions from './pages/Instructions';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Alert />
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Flex
            direction="column"
            align="center"
            justify="space-evenly"
            minH="100vh"
            minW="100vw"
          >
            <BlogList />
            <Divider />
            <SiteBanner />
            <Divider />
            <AirBnb />
            <Divider />
            <Form />
            <Divider />
            <Pin />
            <Divider />
            <CardParent />
            <Divider />
            <TableSimple />
            <Divider />
            <SelectOptions />
            <Divider />
            <CardAppointment />
            <Divider />
            <HalfLife />
            <Divider />
            <ComponentPanel />
            <Divider />
          </Flex>
        </Route>
        <Route path="/ins">
          <Instructions />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
