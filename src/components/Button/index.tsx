import { Button as Base, ButtonProps as BaseProps } from "@chakra-ui/react";

interface ButtonProps extends BaseProps {
  scheme: "blue" | "green";
}

export function Button(props: ButtonProps) {
  const color = activeColor();
  const background = backgroundColor();

  function activeColor(): string {
    if (props.scheme === "blue") {
      return "lightBlueHover"
    }
    return "primaryGreenHover"
  }

  function backgroundColor(): string {
    if (props.variant === 'outline') {
      return "transparent";
    }

    if (props.scheme === "blue") {
      return "lightBlue"
    }

    return "primaryGreen"
  }

  return (
    <Base
      backgroundColor={background}
      borderColor={color}
      _hover={{
        bg: color
      }}
      _active={{
        bg: color,
        border: 0,
      }}
      textColor="white"
      isFullWidth
      px="1rem"
      {...props}
    />
  );
}
