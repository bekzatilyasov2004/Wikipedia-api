import { Image } from "@chakra-ui/image";
import { Box, Flex, Text, Link as ChakraLink } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import "../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      w={"full"}
      h={{ base: "80px", md: "100px" }}
      display={"flex"}
      justifyContent={'space-around'}
      alignItems={"center"}
      px={{ base: 4, md: 0 }}
      >
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Image src={"./logo.png"} w={{ base: 70, md: 100 }} alt={"logo"} />
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "30px", md: "50px" }}
          className="webkit"
        >
          Earth
        </Text>
      </Box>
      <Box>
        <Flex
          display={{ base: "none", md: "flex" }}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={5}
        >
          <ChakraLink as={Link} to="/">
            Home
          </ChakraLink>
          <ChakraLink as={Link} to="/country">
            Country
          </ChakraLink>
        </Flex>
        <Flex
          display={{ base: "flex", md: "none" }}
          justifyContent={"end"}
          alignItems={"center"}
        >
          <Box onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Box>
        </Flex>
      </Box>
      {isOpen && (
        <Box
          position={"absolute"}
          top={"80px"}
          left={0}
          w={"full"}
          bg="gray.200"
          p={4}
          zIndex={1}
          boxShadow={"lg"}
        >
          <Flex direction={"column"} alignItems={"start"}>
            <ChakraLink as={Link} to="/" onClick={() => setIsOpen(false)}>
              Home
            </ChakraLink>
            <ChakraLink as={Link} to="/country" onClick={() => setIsOpen(false)}>
              Country
            </ChakraLink>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Header;