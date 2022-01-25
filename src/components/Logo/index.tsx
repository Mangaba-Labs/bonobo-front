import { Box } from "@chakra-ui/react";
import Bonobo from "../../assets/images/bonobo-raw.svg";

type LogoProps = {
  height?: number;
  width?: number;
  my?: number;
  mx?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
};

export function Logo(props: LogoProps) {
  return (
    <Box
      alignItems="center"
      backgroundColor="primaryGreen"
      borderRadius="50%"
      data-testid="logo"
      display="flex"
      height={props.height ? props.height : 120}
      justifyContent="center"
      my={props.my}
      mx={props.mx}
      ml={props.ml}
      mr={props.mr}
      mt={props.mt}
      mb={props.mb}
      p={5}
      width={props.width ? props.width : 120}
    >
      <Bonobo
        height={props.height ? props.height : 120}
        width={props.width ? props.width : 120}
      />
    </Box>
  );
}
