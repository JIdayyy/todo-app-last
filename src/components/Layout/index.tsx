import { Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <Flex direction="column" w="100vw" h="100vh">
      <Navbar />
      {children}
    </Flex>
  );
}
