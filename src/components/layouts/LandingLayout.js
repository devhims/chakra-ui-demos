import { Flex, Box } from '@chakra-ui/react';
import Header from '../ui/Header';
// import Footer from '../sections/Footer';
import Footer from '../Footer';

const LandingLayout = (props) => {
  return (
    <Flex
      direction="column"
      align="center"
      //   minW="100vw"
      //   minH="100vh"
      maxW={{ xl: '1200px' }}
      m="0 auto"
      {...props}
    >
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
};

export default LandingLayout;
