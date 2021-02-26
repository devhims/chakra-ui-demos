import { useColorMode, Box, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box mr={2}>
      <IconButton
        aria-label="dark mode toggle button"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        _hover={{ bgColor: 'whiteAlpha.500' }}
      />
    </Box>
  );
};

export default DarkModeSwitch;
