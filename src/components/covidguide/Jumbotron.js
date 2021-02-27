import { Box, Heading, Select, Stack, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const supportedLang = [
  { label: 'English', value: 'English' },
  { label: 'Hindi', value: 'Hindi' },
  { label: 'Kannada', value: 'Kannada' },
];

const JumboTron = ({ ...rest }) => {
  const [lang, setLang] = useState('English');
  return (
    <Box
      bg="lightseagreen"
      pt={[12, 24]}
      pb={[12, 24]}
      px={6}
      {...rest}
      w="100%"
      textAlign="center"
    >
      <Stack spacing={6} align="center" justify="center" w="inherit">
        <Heading color="white" fontWeight="extrabold" fontSize="5xl">
          Let's fight Corona Virus together
        </Heading>
        <Select
          bg="white"
          size="lg"
          value={lang}
          onChange={({ target }) => setLang(target.value)}
          placeholder="Select language"
          maxW="280px"
          mx="0 auto"
        >
          {supportedLang.map((lg, index) => (
            <option key={index} value={lg.value}>
              {lg.label}
            </option>
          ))}
        </Select>
      </Stack>
    </Box>
  );
};

export default JumboTron;
