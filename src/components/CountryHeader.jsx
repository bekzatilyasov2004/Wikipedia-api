import React, { useEffect } from "react";
import { Box, Flex, Heading, Text, Button, Link, useBreakpointValue, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import countryData from "../constants/CountryData";
import useStore from '../hooks/store';

const CountryHeader = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const selectedCountry = useStore(state => state.selectedCountry);
  const setSelectedCountry = useStore(state => state.setSelectedCountry);

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    } else {
      setSelectedCountry("United States"); // Set default country here
    }
  }, [setSelectedCountry]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <Box bg="gray.100" py={{ base: 4, md: 6 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
      >
        <Flex align="center" mr={{ base: 0, md: 6 }}>
          <Heading className={'webkit'} as="h1" size={{ base: "md", md: "lg" }} mr={4}>
            {selectedCountry}
          </Heading>
          {!isMobile && (
            <Text className={'webkit'} fontSize={{ base: "sm", md: "md" }} color="gray.500">
              Welcome to {selectedCountry}
            </Text>
          )}
        </Flex>
        <Flex mt={{ base: 4, md: 0 }} align="center">
          <Menu>
            <MenuButton as={Button} variant={'outline'} mr={4}>
              {selectedCountry}
            </MenuButton>
            <MenuList maxH="350px" overflowY="auto">
              {countryData.map((country) => (
                <MenuItem key={country.name} onClick={() => handleCountryChange(country.name)}>
                  {country.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Button>
            <Link
              as={RouterLink}
              to={`https://en.wikipedia.org/wiki/${selectedCountry.replace(/\s/g, "_")}`}
              variant="outline"
              colorScheme="blue"
              target={'_blank'}
              size={{ base: "sm", md: "md" }}
            >
              Learn More
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CountryHeader;
