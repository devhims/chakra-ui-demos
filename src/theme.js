// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const components = {};

const theme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
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
  },
});

// 3. extend the theme
// const theme = extendTheme({ config });

export default theme;
