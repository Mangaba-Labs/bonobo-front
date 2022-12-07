import { Box, Text } from "@chakra-ui/layout";
import { Button, Input } from "../..";

export function EditProfile() {
  return (
    <Box display="flex" flexDir="column" height="100%" width="100%">
      <Text fontSize="3rem" fontWeight="bold" mb="2rem">
        Edit profile
      </Text>
      <Box
        alignSelf="center"
        display="flex"
        flexDir="column"
        height="100%"
        justifyContent="center"
        mt="-5rem"
        width="35rem"
      >
        <Input placeholder="Name" type="name" mb="1.5rem" />
        <Input placeholder="Email" type="email" mb="1.5rem" />
        <Button textColor="black" scheme="green" width="35rem">
          Confirm
        </Button>
      </Box>
    </Box>
  );
}
