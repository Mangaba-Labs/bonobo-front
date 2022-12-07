import { Box } from "@chakra-ui/react";
import { Header, Cart as CartComponent, PaymentMethod } from "../../components";

export default function Cart() {
  return (
    <Box bg="background" height="100vh">
      <Header />
      <Box mt="7rem">
        <Box
          alignItems="flex-start"
          display="flex"
          justifyContent="space-evenly"
        >
          {/* <SignForm /> */}
          <PaymentMethod />
          <CartComponent />
        </Box>
      </Box>
    </Box>
  );
}
