import { Box, Select, Stack, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
// import { AppContext } from "../../AppProvider";

import EmergencyData from '../../data/EmergencyData';

const EmergencyLines = ({ ...rest }) => {
  return (
    <Box id="Emergency Lines" borderWidth="2xs" p={6} {...rest}>
      <EmergencyAction />
    </Box>
  );
};

export const EmergencyAction = () => {
  const [state, setState] = useState();
  //   const { openTestCenters, getTestCenters } = useContext(AppContext);
  //   const { t } = useTranslator();

  //   const { onOpen, state, setState } = openTestCenters();
  //   let { stateOptions } = getTestCenters();
  return (
    <Stack spacing={6}>
      <Text fontSize="lg" fontWeight="bold">
        Find Emergency lines & Test centers near you
      </Text>
      <Select
        size="lg"
        value={state}
        placeholder="Select your state or city"
        // onChange={({ target }) => {
        //   setState(target.value);
        //   //   onOpen();
        // }}
      >
        {EmergencyData.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </Stack>
  );
};

export default EmergencyLines;
