import { Box, Text } from "@chakra-ui/layout";

interface Props {
  step: number;
}

function Item({ step, name }) {
  return (
    <Box alignItems="center" display="flex">
      <Box
        alignItems="center"
        bg={step === 1 ? "primaryGreen" : "gray.500"}
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        height="1.2rem"
        mr=".5rem"
        width="1.2rem"
      >
        <Text color={step === 1 ? "black" : "white"} fontWeight="bold">
          {step}
        </Text>
      </Box>
      <Text color={step === 1 ? "primaryGreen" : "gray.500"}>{name}</Text>
    </Box>
  );
}

export function Wizard(props: Props) {
  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      fontSize=".8rem"
      fontWeight="bold"
    >
      <Item step={1} name="Information" />
      <Item step={2} name="Payment Details" />
      <Item step={3} name="Complete Order" />
    </Box>
  );
}
