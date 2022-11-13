import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import RadioButtonUnchecked from "../../../assets/images/radio_button_unchecked.svg";
import RadioButtonChecked from "../../../assets/images/radio_button_checked.svg";
import Card from "../../../assets/images/card.svg";

export function PaymentMethod() {
  return (
    <Box>
      <Text>Payment</Text>
      <Box bg="gray.700" borderRadius=".4rem" px="2rem" py="2rem">
        <Text color="primaryGreen" fontSize="2rem" fontWeight="bold">
          How do you prefer to pay?
        </Text>
        <Text fontWeight="bold" my="1rem">
          Cards
        </Text>
        <Box
          alignItems="center"
          bg="gray.600"
          borderRadius=".4rem"
          cursor="pointer"
          display="flex"
          flexDir="row"
          justifyContent="space-between"
          mb="1rem"
          px="2rem"
          py="1rem"
        >
          <Box>
            <Text fontWeight="bold">Add a new credit card</Text>
            <Text>--- ---- ---- ----</Text>
          </Box>
          <AddIcon color="white" height="1.1rem" width="1.1rem" />
        </Box>
        <Box
          alignItems="center"
          bg="gray.900"
          borderRadius=".4rem"
          cursor="pointer"
          display="flex"
          flexDir="row"
          justifyContent="space-between"
          px="2rem"
          py="1rem"
        >
          {1 === 1 ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
          <Box></Box>
          <Box>
            <Text fontWeight="bold">Visa</Text>
            <Text>**** **** **** 8232</Text>
          </Box>
          <CloseIcon color="white" height="1.1rem" width="1.1rem" />
        </Box>
      </Box>
    </Box>
  );
}
