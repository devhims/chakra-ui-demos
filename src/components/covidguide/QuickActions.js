import { Icon, SimpleGrid, Stack, Text, Box } from '@chakra-ui/react';
// import React, { useContext } from 'react';
// import { useHistory } from 'react-router';
// import useTranslator from '../../useTranslator';
// import { AppContext } from '../../AppProvider';

import QuickActionsData from '../../data/QuickActionsData';

const QuickActions = ({ ...rest }) => {
  //   const { t } = useTranslator();
  //   const { openTestCenters } = useContext(AppContext);
  //   const { onOpen } = openTestCenters();
  //   const history = useHistory();

  //   const handleClick = (destination) => {
  //     if (destination === 'openModal') onOpen();
  //     if (destination === '/checker') history.push(destination);
  //   }

  return (
    <SimpleGrid columns={[2, 4]} spacing={10} {...rest} mx={3}>
      {QuickActionsData.map(({ icon, title }) => (
        <Box
          p={3}
          key={title}
          // as={destination === 'openChat' && 'a'}
          // href={destination === 'openChat' && 'https://bit.ly/3bqNpPr'}
          // onClick={() => handleClick(destination)}
          rounded="lg"
          _hover={{
            cursor: 'pointer',
            color: 'gray.800',
            bg: 'gray.100',
          }}
        >
          <Stack spacing={3} align="center">
            <Icon as={icon} color="green.500" boxSize={6} />
            <Text textAlign="center">{title}</Text>
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default QuickActions;
