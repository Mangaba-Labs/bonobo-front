import { Box, Text } from "@chakra-ui/layout";
import { Product } from "./Product";
import { Wizard } from "./Wizard";

export function Cart() {
  return (
    <Box>
      <Box
        bg="gray.700"
        borderRadius=".4rem"
        px="2rem"
        height="40rem"
        mb="1.5rem"
        overflowY="scroll"
        py="2rem"
        width="30rem"
      >
        <Text color="primaryGreen" fontSize="1.5rem" fontWeight="bold">
          Cart
        </Text>

        <Box pt="2rem">
          <Product id={Math.random()} image="" name="" price="" />
          <Product id={Math.random()} image="" name="" price="" />
          <Product id={Math.random()} image="" name="" price="" />
          <Product id={Math.random()} image="" name="" price="" />
          <Product id={Math.random()} image="" name="" price="" />
          <Product id={Math.random()} image="" name="" price="" />
        </Box>

        <Box>
          <Box
            alignItems="center"
            display="flex"
            flexDir="row"
            justifyContent="space-between"
            mb="1rem"
          >
            <Text color="gray.300">Product value</Text>
            <Text color="gray.300">$ 60.00</Text>
          </Box>
          <Box
            alignItems="center"
            display="flex"
            flexDir="row"
            justifyContent="space-between"
            mb="1rem"
          >
            <Text color="gray.300">Service Tax</Text>
            <Text color="gray.300">$ 10.00</Text>
          </Box>
          <Box
            alignItems="center"
            display="flex"
            flexDir="row"
            fontWeight="bold"
            justifyContent="space-between"
            mb="1rem"
          >
            <Text>Total value</Text>
            <Text>$ 70.00</Text>
          </Box>
        </Box>
      </Box>
      <Wizard step={1} />
    </Box>
  );
}

export * from "./PaymentMethod";
export * from "./PaymentMethod";
