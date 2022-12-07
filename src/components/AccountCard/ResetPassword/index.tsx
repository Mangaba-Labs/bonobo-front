import { Box, Text } from "@chakra-ui/react";
import { Button, Input } from "../..";

export function ResetPassword() {
  return (
    <Box display="flex" flexDir="column" height="100%" width="100%">
      <Text fontSize="3rem" fontWeight="bold" mb="2rem">
        Reset Password
      </Text>
      <Text fontSize="1.1rem">
        Your new password must be different from previous used passwords
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
        <Input placeholder="Old Password" type="password" mb="1.5rem" />
        <Input placeholder="New Password" type="password" mb="1.5rem" />
        <Input placeholder="Confirm Password" type="password" mb="1.5rem" />
        <Button textColor="black" scheme="green" width="35rem">
          Reset Password
        </Button>
      </Box>
    </Box>
  );
}
