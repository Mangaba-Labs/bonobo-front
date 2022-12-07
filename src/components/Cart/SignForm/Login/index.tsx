import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import { Button, Input } from "../../..";

export function Login() {
  return (
    <Box mt="1rem">
      <Text fontSize="2rem" fontWeight="bold">
        Login
      </Text>
      <Input my="1rem" placeholder="Email" />
      <Input my="1rem" placeholder="Password" />
      <Button
        my="1rem"
        scheme="green"
        textColor="black"
        rightIcon={<ChevronRightIcon height="2rem" width="2rem" />}
      >
        Next
      </Button>
    </Box>
  );
}
