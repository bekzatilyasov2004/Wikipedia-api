import React from 'react';
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';

const ForTheTuture = () => {
  return (
    <Box py={{ base: 10, md: 20 }} p={10} >
      <Heading
        size={{ base: '2xl', md: '4xl' }}
        mb={6}
        textAlign="center"
        fontWeight="bold"
      >
        Building a Sustainable Future
      </Heading>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        mb={8}
      >
        <Image
          src="https://electricove.com/wp-content/uploads/2024/03/Solar-Energy-scaled.jpg"
          alt="Sustainable Future"
          borderRadius="lg"
          mr={{ base: 0, md: 8 }}
          mb={{ base: 6, md: 0 }}
          maxW={{ base: 'full', md: '40%' }}
        />
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          fontWeight="medium"
          maxW={{ base: 'full', md: '60%' }}
        >
          To ensure a sustainable future for our planet, we must take
          immediate action to address the pressing environmental issues we
          face. This includes transitioning to renewable energy sources,
          implementing sustainable agricultural practices, protecting
          biodiversity, and reducing our carbon footprint. By working
          together as a global community, we can create a more
          environmentally-conscious and resilient world for generations to
          come.
        </Text>
      </Flex>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
      >
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          fontWeight="medium"
          maxW={{ base: 'full', md: '60%' }}
          mr={{ base: 0, md: 8 }}
          mb={{ base: 6, md: 0 }}
        >
          By investing in renewable energy, sustainable agriculture, and
          habitat restoration, we can take tangible steps towards a more
          sustainable future. These efforts not only benefit the
          environment but also create new economic opportunities and
          improve the overall quality of life for communities around the
          world.
        </Text>
        <Image
          src="https://electricove.com/wp-content/uploads/2024/03/Benifit-of-renewable-energy-scaled.jpg"
          alt="Sustainable Agriculture"
          borderRadius="lg"
          maxW={{ base: 'full', md: '40%' }}
        />
      </Flex>
    </Box>
  );
};

export default ForTheTuture;