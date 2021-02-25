import React, { useState } from 'react';
import { Box, Flex, Text, Button, Stack } from '@chakra-ui/react';
import { IoIosClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import Logo from './Logo';

import Hero from '../sections/Hero';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      as={isOpen ? CloseIcon : HamburgerIcon}
      onClick={toggle}
      display={{ base: 'block', md: 'none' }}
      w={5}
      h={5}
    />
  );
};

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link to={to}>
      <Text
        display="block"
        {...rest}
        // mb={{ base: isLast ? 0 : 8, sm: 0 }}
        // mr={{ base: 0, sm: isLast ? 0 : 8 }}
      >
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/how">How it works </MenuItem>
        <MenuItem to="/faetures">Features </MenuItem>
        <MenuItem to="/pricing">Pricing </MenuItem>
        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color={['linkedin.500', 'linkedin.500', 'white', 'white']}
            bg={['white', 'white', 'linkedin.500', 'linkedin.500']}
            _hover={{
              bg: [
                'linkedin.100',
                'linkedin.100',
                'linkedin.600',
                'linkdin.600',
              ],
            }}
          >
            Create Account
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={4}
      bg={['linkedin.500', 'linkedin.500', 'transparent', 'transparent']}
      color={['white', 'white', 'linkedin.700', 'linkedin.700']}
      {...props}
    >
      {children}
    </Flex>
  );
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <NavBarContainer {...props}>
        <Logo
          w="100px"
          color={['white', 'white', 'primary.500', 'primary.500']}
        />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    </>
  );
};

export default Header;
