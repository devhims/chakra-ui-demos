import { Box, Stack } from '@chakra-ui/react';
// import useTranslator from "../../useTranslator";

import QuickLinksData from '../../data/QuickLinksData';

const QuickLinks = ({ ...rest }) => {
  //   const { t } = useTranslator();

  //   const handleClick = (section_id) => {
  //     let jobSection = document.getElementById(section_id);
  //     jobSection.scrollIntoView({
  //       block: 'start',
  //       inline: 'start',
  //       behavior: 'smooth',
  //     });
  //   };
  return (
    <Box
      position="sticky"
      id="Quick Links"
      top={20}
      d={['none', 'none', 'none', 'block']}
      height="fit-content"
      maxW="280px"
      mb={16}
      {...rest}
    >
      <Stack>
        {QuickLinksData.map((link, index) => (
          <Box
            key={index}
            pl={10}
            py={2}
            pr={6}
            // onClick={() => handleClick(id)}
            borderRadius="0 16px 16px 0"
            fontWeight="medium"
            color="green.500"
            _hover={{
              bg: 'green.100',
              cursor: 'pointer',
              color: 'gray.700',
            }}
          >
            {link}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default QuickLinks;
