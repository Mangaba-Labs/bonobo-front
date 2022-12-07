import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { AccountCard, Header } from "../../components";
import { ProfileContext } from "../../components/AccountCard/context";

export default function Profile() {
  const [screen, setScreen] = useState("profile");

  return (
    <Box
      alignItems="center"
      bg="background"
      display="flex"
      flexDirection="column"
      height="100vh"
      width="100%"
    >
      <Box width="100%">
        <Header />
      </Box>
      <Box alignSelf="center" height="77%" mt="4rem" width="90rem">
        <ProfileContext.Provider value={{ screen, setScreen }}>
          <AccountCard />
        </ProfileContext.Provider>
      </Box>
    </Box>
  );
}
