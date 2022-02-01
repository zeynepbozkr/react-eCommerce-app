import React from "react";
import { Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Card() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to="#/">
        <Image src="http://lorempixel.com/400/200" alt="product"></Image>

        <Box p="6">
          <Box d="plex" alignItems="baseline">
            01/01/2022
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tght">
            Macbook Pro
          </Box>
          <Box>100 Tl</Box>{" "}
        </Box>
      </Link>
      <Button colorScheme="pink"> add to basket</Button>
    </Box>
  );
}

export default Card;
