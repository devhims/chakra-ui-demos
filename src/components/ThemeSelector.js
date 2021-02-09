import { useColorMode, Box, IconButton, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box textAlign="right">
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
};

export default ThemeSelector;
