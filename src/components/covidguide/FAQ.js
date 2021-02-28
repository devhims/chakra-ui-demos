import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
  Text,
} from '@chakra-ui/react';

import FAQData from '../../data/FAQData';

const FAQ = ({ ...rest }) => {
  return (
    <Stack id="FAQs" spacing={6} {...rest} maxW="700px" mx={3}>
      <Text fontSize="lg" textAlign="center" fontWeight="extrabold">
        {FAQData.heading}
      </Text>

      <Accordion allowToggle allowMultiple>
        {FAQData.content.map((item, index) => {
          return (
            <AccordionItem key={index} mb={2}>
              <AccordionButton bg="gray.200">
                <Box flex="1" textAlign="left" fontSize="sm">
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>

      <Text fontSize="xs" fontWeight="bold">
        {FAQData.source}
      </Text>
    </Stack>
  );
};

export default FAQ;
