import { Button as Base, ButtonProps as BaseProps } from "@chakra-ui/react";

interface ButtonProps extends BaseProps {
  scheme: "blue" | "green";
}

export function Button(props: ButtonProps) {
  return (
    <Base
      backgroundColor={props.scheme === "green" ? "primaryGreen" : "lightBlue"}
      border="0px"
      _hover={{
        bg: props.scheme === "green" ? "primaryGreenHover" : "lightBlueHover",
      }}
      _active={{
        bg: props.scheme === "green" ? "primaryGreenHover" : "lightBlueHover",
        border: 0,
      }}
      textColor="white"
      isFullWidth
      px="1rem"
      {...props}
    />
  );
}
