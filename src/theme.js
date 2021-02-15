// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: { initialColorMode: 'light', useSystemColorMode: false },
  components: {
    PinInput: {
      variants: {
        outline: {
          _placeholder: {
            color: mode('gray.300', 'white'),
          },
        },
      },
    },
    Drawer: {
      baseStyle: {
        footer: {
          px: 6,
          py: 4,
          display: 'flex',
          justifyContent: 'flex-start',
        },
      },
    },
  },
  colors: {
    seaBlue: {
      50: '#e1f4ff',
      100: '#bddcf5',
      200: '#97c2e8',
      300: '#6eaadd',
      400: '#4892d3',
      500: '#2e78b9',
      600: '#225e91',
      700: '#154368',
      800: '#062841',
      900: '#000e1b',
    },
    mainBlue: {
      800: '#03045e',
      700: '#023E8A',
      600: '#0077B6',
      500: '#0096C7',
      400: '#00B4D8',
      300: '#48CAE4',
      200: '#90E0EF',
      100: '#ADE8F4',
      50: '#CAF0F8',
    },
  },
});

// 3. extend the theme
// const theme = extendTheme({ config });

export default theme;
