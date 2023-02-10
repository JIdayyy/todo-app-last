import {
  Box,
  Center,
  FormLabel,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CreateTodo from "../src/components/Forms/Todos/Create";
import { Todo } from "../src/types/generals";

export default function Home() {
  const { data, isLoading } = useQuery(["todos"], () =>
    axios.get<Todo[]>(`${process.env.NEXT_PUBLIC_SERVER_URL}/todos`)
  );

  if (isLoading || !data)
    return (
      <Center h="full" w="full">
        <Spinner />
      </Center>
    );

  return (
    <Center w="full" h="full" flexDirection="column">
      <Text as="h1" fontSize={30} fontWeight="bold">
        CLIENT SIDE PAGE
      </Text>
      <VStack spacing={2}>
        {data.data.map((todo) => (
          <Box key={todo.id}>{todo.title}</Box>
        ))}
      </VStack>

      <CreateTodo />
    </Center>
  );
}
