import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import { Button, Input } from "../../..";

export function SignUp() {
  return (
    <Box mt="1rem">
      <Text fontSize="2rem" fontWeight="bold">
        Register
      </Text>
      <Input my="1rem" placeholder="Name" />
      <Input my="1rem" placeholder="Email" />
      <Input my="1rem" placeholder="Password" />
      <Input my="1rem" placeholder="Confirm Password" />
      <Button
        my="1rem"
        scheme="green"
        textColor="black"
        rightIcon={<ChevronRightIcon height="2rem" width="2rem" />}
      >
        Next
      </Button>
      <Text>You need an account to make a purchase</Text>
    </Box>
  );
}
