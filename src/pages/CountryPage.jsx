import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import CountryHeader from "../components/CountryHeader";
import useStore from "../hooks/store";
import axios from "axios";
import CountryFooter from "../components/CountryFooter";
import { Helmet } from "react-helmet";

const CountryPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const selectedCountry =
    useStore((state) => state.selectedCountry) ||
    localStorage.getItem("selectedCountry");
  const [countryInfo, setCountryInfo] = useState({});
  const [countryImage, setCountryImage] = useState("");
  const [countryEconomy, setCountryEconomy] = useState("");
  const [countryDemographics, setCountryDemographics] = useState("");

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const summaryResponse = await axios.get(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${selectedCountry}`
        );
        setCountryInfo(summaryResponse.data);

        const economyResponse = await axios.get(
          `https://en.wikipedia.org/api/rest_v1/page/summary/Economy_of_${selectedCountry}`
        );
        setCountryEconomy(economyResponse.data.extract);

        const demographicsResponse = await axios.get(
          `https://en.wikipedia.org/api/rest_v1/page/summary/Demographics_of_${selectedCountry}`
        );
        setCountryDemographics(demographicsResponse.data.extract);
        setCountryImage(summaryResponse.data.originalimage.source);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, [selectedCountry]);

  return (
    <Box>
      <CountryHeader />
      <Helmet>
      <title>{`${selectedCountry} - Country Info`}</title>
      <meta name="description" content={countryInfo.description} />
      <link rel="shortcut icon" href={countryImage} type="image/x-icon" />
    </Helmet>
      <Flex
        direction="column"
        align="center"
        justify="center"
        h={{ base: "50vh", md: "80vh" }}
        bg={`url(${countryImage}) no-repeat center/cover`}
        color="white"
        textAlign="center"
        px={4}
      >
        <Heading
          className={"webkit"}
          as="h1"
          size={{ base: "2xl", md: "4xl" }}
          mb={4}
        >
          {selectedCountry}
        </Heading>
        <Text className={"webkit"} fontSize={{ base: "md", md: "xl" }} mb={8}>
          {countryInfo.description ||
            "The Land of the Free and the Home of the Brave"}
        </Text>
      </Flex>

      <Box py={{ base: 8, md: 16 }} p={10}>
        <Heading as="h2" size={{ base: "xl", md: "2xl" }} mb={8}>
          A Brief History of {selectedCountry}
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mb={8}>
          {countryInfo.extract || "Loading..."}
        </Text>
      </Box>

      <Box bg="gray.100" py={{ base: 8, md: 16 }} p={10}>
        <Heading
          as="h2"
          size={{ base: "xl", md: "2xl" }}
          mb={8}
          textAlign="center"
        >
          {selectedCountry} Economy
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={8}
        >
          <GridItem>
            <Heading as="h3" size={{ base: "lg", md: "xl" }} mb={4}>
              Economy Overview
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              {countryEconomy || "Loading..."}
            </Text>
          </GridItem>
          <GridItem>
            <Heading as="h3" size={{ base: "lg", md: "xl" }} mb={4}>
              Key Industries
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              The {selectedCountry} economy is diverse, with major sectors
              including technology, finance, manufacturing, agriculture, and
              services.
            </Text>
          </GridItem>
          <GridItem>
            <Heading as="h3" size={{ base: "lg", md: "xl" }} mb={4}>
              Global Influence
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }}>
              {selectedCountry} is a leader in innovation and global economic
              influence, driving advancements in various industries.
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Box py={{ base: 8, md: 16 }} p={10}>
        <Heading
          as="h2"
          size={{ base: "xl", md: "2xl" }}
          mb={8}
          textAlign="center"
        >
          Demographics of {selectedCountry}
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mb={8}>
          {countryDemographics || "Loading..."}
        </Text>
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        py={{ base: 8, md: 16 }}
        p={10}
      >
        {countryImage && (
          <Image
            src={countryImage}
            alt={`Image of ${selectedCountry}`}
            w={{ base: "100%", md: "50%" }}
          />
        )}
        <Box p={{ base: 4, md: 8 }}>
          <Heading as="h2" size={{ base: "xl", md: "2xl" }} mb={4}>
            More about {selectedCountry}
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            {countryInfo.extract || "Loading..."}
          </Text>
        </Box>
      </Flex>
      <CountryFooter selectedCountry={selectedCountry} />
    </Box>
  );
};

export default CountryPage;
