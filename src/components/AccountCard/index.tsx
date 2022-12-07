import { Box, Text } from "@chakra-ui/react";
import AccountCircle from "../../assets/images/account_circle.svg";
import Ticket from "../../assets/images/ticket.svg";
import Shopping from "../../assets/images/shopping.svg";
import Exit from "../../assets/images/exit.svg";
import { ProfileContent } from "./ProfileContent";
import { MySells } from "./Sells";
import { MyOrders } from "./Orders";
import { ProfileContext } from "./context";
import { useContext } from "react";
import { ResetPassword } from "./ResetPassword";
import { EditProfile } from "./EditProfile";
import { HelpOrder } from "./Orders/HelpOrder";

export function AccountCard() {
  const { screen, setScreen } = useContext(ProfileContext);

  function onPressProfile() {
    setScreen("profile");
  }

  function onPressSells() {
    setScreen("sells");
  }

  function onPressOrders() {
    setScreen("orders");
  }

  function Screen() {
    switch (screen) {
      case "profile":
        return <ProfileContent />;
      case "orders":
        return <MyOrders />;
      case "sells":
        return <MySells />;
      case "password":
        return <ResetPassword />;
      case "editProfile":
        return <EditProfile />;
      case "helpOrder":
        return <HelpOrder />;
      default:
        return <ProfileContent />;
    }
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      padding="2rem"
      bg="gray.700"
      borderRadius=".4rem"
      height="100%"
    >
      <Box>
        <Box
          alignItems="start"
          borderRightWidth="1px"
          borderRightColor="gray.400"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
          pr="2rem"
        >
          <Box>
            <Box
              alignItems="center"
              cursor="pointer"
              display="flex"
              flexDirection="row"
              mb="1.75rem"
              onClick={onPressProfile}
            >
              <AccountCircle height="1.5rem" width="1.5rem" />
              <Text fontSize="1.1rem" ml="0.75rem">
                Profile
              </Text>
            </Box>
            <Box
              alignItems="center"
              cursor="pointer"
              display="flex"
              flexDirection="row"
              mb="1.75rem"
              onClick={onPressSells}
            >
              <Ticket height="1.5rem" width="1.5rem" />
              <Text fontSize="1.1rem" ml="0.75rem">
                My Sells
              </Text>
            </Box>
            <Box
              alignItems="center"
              cursor="pointer"
              display="flex"
              flexDirection="row"
              mb="1.75rem"
              onClick={onPressOrders}
            >
              <Shopping height="1.5rem" width="1.5rem" />
              <Text fontSize="1.1rem" ml="0.75rem">
                My Orders
              </Text>
            </Box>
          </Box>
          <Box
            alignItems="center"
            cursor="pointer"
            display="flex"
            flexDirection="row"
          >
            <Exit height="1.5rem" width="1.5rem" />
            <Text fontSize="1.1rem" ml="0.75rem">
              Disconnect
            </Text>
          </Box>
        </Box>
      </Box>
      <Box ml="4rem" width="100%">
        <Screen />
      </Box>
    </Box>
  );
}
