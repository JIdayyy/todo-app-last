import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Switch,
  VStack,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FieldValues, useForm } from "react-hook-form";

export default function CreateTodo() {
  const client = useQueryClient();
  const { handleSubmit, setValue, register, reset } = useForm();
  const { mutate } = useMutation(
    (data: FieldValues) =>
      axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/todos`, data),
    {
      onSuccess: () => {
        setValue("title", "");
        client.invalidateQueries(["todos"]);
      },
    }
  );

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    mutate({
      ...data,
      userId: "e2f4d454-b178-4323-b9d9-97e3ce7be740",
    });
  };

  return (
    <Center flexDirection="column">
      <FormLabel>Create Todo :</FormLabel>
      <VStack w="50%" spacing={2}>
        <Input {...register("title")} />
        <Switch {...register("completed")} />
        <Button onClick={handleSubmit(onSubmit)}>Create Todo</Button>
      </VStack>
    </Center>
  );
}
