import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CountryFooter = ({ selectedCountry }) => {
  return (
    <Box
      as="footer"
      bg="gray.200"
      py={4}
      px={8}
      textAlign="center"
      borderTop="1px solid"
      borderColor="gray.400"
      mt="auto"
    >
      <Text fontSize="sm" fontWeight="semibold">
        Country: {selectedCountry}
      </Text>
      <Text fontSize="xs" mt={1} color="gray.600">
        &copy; 2024 Earth Exploration. All rights reserved.
      </Text>
    </Box>
  );
};

export default CountryFooter;
