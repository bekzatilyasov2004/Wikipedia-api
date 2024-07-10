import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const EarthHistory = () => {
  return (
    <Box py={10} p={10}>
      <Heading
        mb={6}
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        textAlign="center"
      >
        The Epic History of Planet Earth
      </Heading>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={{ base: 6, md: 8, lg: 10 }}
        
      >
        <GridItem p={10}>
          <Flex alignItems="center" justifyContent="center">
            <Image
              src="./boom.jpg"
              alt="Earth Formation"
              maxW={{ base: "80%", md: "80%", lg: "80%" }}
            />
          </Flex>
        </GridItem>
        <GridItem>
          <Heading mb={3} fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
            Earth's Formation
          </Heading>
          <Text fontSize={{ base: "sm", md: "md", lg: "xl" }}>
            The Earth formed around 4.54 billion years ago from the
            gravitational collapse of a region within a giant molecular cloud.
            Over time, the planet's surface and internal structure developed,
            leading to the formation of the continents, oceans, and atmosphere.
            This process was driven by the accretion of dust and gas, as well as
            the differentiation of the planet's interior into a dense core, a
            mantle, and a crust.
          </Text>
        </GridItem>
      </Grid>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={{ base: 6, md: 8, lg: 10 }}
        mt={{ base: 6, md: 8, lg: 10 }}
      >
        <GridItem order={{ base: 2, md: 1, lg: 1 }}>
          <Heading mb={3} fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
            The Rise of Life
          </Heading>
          <Text fontSize={{ base: "sm", md: "md", lg: "xl" }}>
            The earliest known life forms on Earth appeared around 3.5 billion
            years ago in the form of simple, single-celled organisms. Over
            billions of years, life evolved into a diverse array of plant and
            animal species, including the first multicellular organisms, the
            emergence of land plants, and the rise of the dinosaurs. This
            evolution was driven by natural selection, as organisms adapted to
            changing environmental conditions and ecological niches.
          </Text>
        </GridItem>
        <GridItem order={{ base: 1, md: 2, lg: 2 }}>
          <Flex alignItems="center" justifyContent="center">
            <Image
            src="./gaza.jpg"
              alt="Life on Earth"
              maxW={{ base: "80%", md: "80%", lg: "80%" }}
            />
          </Flex>
        </GridItem>
      </Grid>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={{ base: 6, md: 8, lg: 10 }}
        mt={{ base: 6, md: 8, lg: 10 }}
      >
        <GridItem>
          <Flex alignItems="center" justifyContent="center">
            <Image
              src="./ec.jpeg"
              alt="Climate Change"
              maxW={{ base: "80%", md: "80%", lg: "80%" }}
            />
          </Flex>
        </GridItem>
        <GridItem>
          <Heading mb={3} fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
            The Challenge of Climate Change
          </Heading>
          <Text fontSize={{ base: "sm", md: "md", lg: "xl" }}>
            In recent centuries, human activities such as the burning of fossil
            fuels have led to significant changes in the Earth's climate,
            causing global warming, sea level rise, and more frequent extreme
            weather events. Addressing the threat of climate change is one of
            the greatest challenges facing humanity and the planet. Strategies
            to mitigate and adapt to climate change include transitioning to
            renewable energy sources, improving energy efficiency, and
            protecting and restoring natural ecosystems.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default EarthHistory;
