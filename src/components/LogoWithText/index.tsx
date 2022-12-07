import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Bonobo from "../../assets/images/bonobo-with-text.svg";

type LogoProps = {
  height?: number | string;
  width?: number | string;
  my?: number | string;
  mx?: number | string;
  ml?: number | string;
  mr?: number | string;
  mt?: number | string;
  mb?: number | string;
};

export function LogoWithText(props: LogoProps) {
  const route = useRouter();

  function onPressLogo() {
    route.push("/");
  }

  return (
    <Box
      alignItems="center"
      backgroundColor="transparent"
      borderRadius="50%"
      data-testid="logo"
      display="flex"
      height={props.height ? props.height : 120}
      justifyContent="center"
      cursor="pointer"
      onClick={onPressLogo}
      my={props.my}
      mx={props.mx}
      ml={props.ml}
      mr={props.mr}
      mt={props.mt}
      mb={props.mb}
      p={5}
      width={props.width ? props.width : "auto"}
    >
      <Bonobo height={props.height ? props.height : 120} width="auto" />
    </Box>
  );
}
