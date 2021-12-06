import { Button as Base, ButtonProps } from "@chakra-ui/react";

export function Button(props: ButtonProps) {
  return <Base isFullWidth px="1rem" {...props} />;
}
