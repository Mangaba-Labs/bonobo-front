import { Box } from "@chakra-ui/react";
import Bonobo from "../../assets/images/bonobo-raw.svg";

type LogoProps = {
  height?: number | string;
  width?: number | string;
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
      height={props.height ? props.height : "2.5rem"}
      justifyContent="center"
      my={props.my}
      mx={props.mx}
      ml={props.ml}
      mr={props.mr}
      mt={props.mt}
      mb={props.mb}
      p={5}
      width={props.width ? props.width : "2.5rem"}
    >
      <Box>
        <Bonobo
          width={props.width ? props.width : "2em"}
          height={props.height ? props.height : "2em"}
        />
      </Box>
    </Box>
  );
}
