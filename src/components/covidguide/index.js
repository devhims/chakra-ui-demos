import { Box, Flex, Grid, Stack } from '@chakra-ui/react';

import FAQ from './FAQ';
import Prevention from './Prevention';
import LiveData from './LiveData';
import Definition from './Definition';
import Jumbotron from './Jumbotron';
import Symptoms from './Symptoms';
import MythsAndFacts from './MythsAndFacts';
import EmergencyLines from './EmergencyLines';
import QuickActions from './QuickActions';
import QuickLinks from './QuickLinks';
import { Helmet } from 'react-helmet';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const HomePage = () => {
  return (
    <Box>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Corona Nigeria | Let's Fight Corona Together</title>
        <link rel="canonical" href="http://coronanigeria.org/" />
      </Helmet>
      <Header />
      <Jumbotron />
      <Flex mt={16} maxW="1680px" mx="auto">
        <QuickLinks />
        <Stack spacing={16} flex={1} mx={[6, 10]} mb={32}>
          <QuickActions />

          <Grid
            templateColumns={['none', 'none', 'none', 'none', '1.5fr 1fr']}
            columnGap={10}
            rowGap={12}
          >
            <Stack spacing={12}>
              <LiveData />
              <Definition />
              <Symptoms />
              <Prevention />
              <MythsAndFacts />
            </Stack>
            <Stack spacing={16}>
              <EmergencyLines />
              <FAQ />
            </Stack>
          </Grid>
        </Stack>
      </Flex>
      <Footer />
    </Box>
  );
};

export default HomePage;
