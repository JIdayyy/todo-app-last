import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Flex
      w="full"
      h={20}
      shadow="md"
      px={20}
      py={5}
      justify="end"
      alignItems="center"
    ></Flex>
  );
}
