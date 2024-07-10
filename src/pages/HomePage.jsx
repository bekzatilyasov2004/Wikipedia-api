import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../components/Header";
import EarthHistory from "../components/EarthHistory";
import ForTheTuture from "../components/ForTheTuture";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const carouselHeight = useBreakpointValue({ base: "60vh", md: "80vh" });

  return (
    <Box>
      <Header />
      <Helmet>
      <title>Earth</title>
      <link rel="shortcut icon" href="./logo.png" type="image/x-icon" />
    </Helmet>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={3000}
      >
        <Flex
          justify="center"
          align="center"
          direction="column"
          h={carouselHeight}
          bg={"url(./ot.jpg)"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          color="white"
          textAlign="center"
          px={{ base: 4, md: 8 }}
        >
          <Heading
            className={"webkit"}
            size={{ base: "2xl", md: "4xl" }}
            mb={4}
          >
            Welcome to Our Site
          </Heading>
          <Text fontSize={{ base: "sm", md: "xl" }} mb={8}>
            Earth. Home to a remarkable diversity of life and a fragile balance
            of natural systems, our blue and green world is a precious resource
            that we must protect for future generations. Explore our site and
            learn how you can contribute to a more sustainable future.
          </Text>
          <Button
            colorScheme="teal"
            variant="solid"
            fontSize={{ base: "sm", md: "md" }}
          >
            Explore Now
          </Button>
        </Flex>
        <Flex
          justify="center"
          align="center"
          direction="column"
          h={carouselHeight}
          bg={"url(./cap.jpg)"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          color="white"
          textAlign="center"
          px={{ base: 4, md: 8 }}
        >
          <Heading
            className={"webkit"}
            size={{ base: "2xl", md: "4xl" }}
            mb={4}
          >
            Explore Planet Earth
          </Heading>
          <Text fontSize={{ base: "sm", md: "xl" }} mb={8}>
            Earth is our home planet, a unique and fragile world teeming with
            life. Covering over 70% of the planet's surface, the oceans play a
            vital role in regulating the Earth's climate and supporting a
            diverse array of marine ecosystems. On land, the world is home to a
            remarkable diversity of plant and animal species, from the tallest
            trees to the smallest insects. As we continue to explore and
            understand our planet, we are reminded of the need to protect and
            preserve its natural wonders for future generations.
          </Text>
          <Button
            colorScheme="teal"
            variant="solid"
            fontSize={{ base: "sm", md: "md" }}
          >
            Discover Earth
          </Button>
        </Flex>
        <Flex
          justify="center"
          align="center"
          direction="column"
          h={carouselHeight}
          bg={"url(./pro.jpg)"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          color="white"
          textAlign="center"
          px={{ base: 4, md: 8 }}
        >
          <Heading
            className={"webkit"}
            size={{ base: "2xl", md: "4xl" }}
            mb={4}
          >
            Climate Change: A Global Crisis
          </Heading>
          <Text fontSize={{ base: "sm", md: "xl" }} mb={8}>
            Climate change is one of the greatest threats facing our planet.
            Rising temperatures, melting glaciers, sea level rise, and more
            frequent extreme weather events are just a few of the devastating
            consequences. We must take urgent action to reduce greenhouse gas
            emissions and implement sustainable solutions to protect our home
            for future generations.
          </Text>
          <Button
            colorScheme="teal"
            variant="solid"
            fontSize={{ base: "sm", md: "md" }}
          >
            Learn More
          </Button>
        </Flex>
      </Carousel>
      <EarthHistory />
      <Box w={"full"} textAlign={"center"}>
        <Heading size={{ base: "2xl", md: "4xl" }} mb={4}>
          The Fragile State of Our Planet
        </Heading>
        <video autoPlay    muted loop>
          <source src={"./erth.webm"} alt={"erth"} />
        </video>
        <Text p={10} fontSize={{ base: "md", md: "xl" }} mt={4}>
          Our planet, Earth, is in a fragile state. Climate change, pollution,
          habitat destruction, and unsustainable resource extraction are just a
          few of the pressing issues threatening the delicate balance of our
          global ecosystem. As the only known planet capable of supporting life,
          we have a responsibility to protect and preserve it for future
          generations. Through collective action and a commitment to
          sustainability, we can work to address these challenges and ensure the
          long-term health and viability of our home planet.
        </Text>
      </Box>
      <Box>
        <ForTheTuture />
      </Box>
      
      <Footer />
    </Box>
  );
};

export default HomePage;
