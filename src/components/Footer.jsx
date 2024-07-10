import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.200" py={8}>
      <Flex
        justify="center"
        align="center"
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        mx={4}
      >
        <Text fontSize="sm" mr={4}>
          &copy; 2024 Earth. All rights reserved.
        </Text>
        <Flex align="center" mt={{ base: 4, md: 0 }}>
          <Link target={'_blank'} href="https://github.com/bekzatilyasov2004" mr={4}>
            <FaGithub size={20} />
          </Link>
          <Link target={'_blank'} href="https://instagram.com/bekzat_ilyasov" mr={4}>
            <FaInstagram size={20} />
          </Link>
          <Link target={'_blank'} href="https://t.me/beka_developer" mr={4}>
          <FaTelegram size={20} />
        </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
