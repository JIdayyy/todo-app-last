import { Center, Text } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps } from "next";
import React from "react";
import { Todo } from "../src/types/generals";

type Props = {
  todos: Todo[];
};

export default function ServerPage({ todos }: Props) {
  return (
    <Center flexDirection="column">
      <Text as="h1" fontSize={30} fontWeight="bold">
        STATIC PAGE
      </Text>
      {todos.map((todo) => (
        <Text key={todo.id}>{todo.title}</Text>
      ))}
    </Center>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<Todo[]>(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/todos`
  );

  return {
    props: {
      todos: data,
    },
    revalidate: 10,
  };
};
