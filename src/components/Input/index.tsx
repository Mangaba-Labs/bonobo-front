import { Input as Base, InputProps } from "@chakra-ui/input";

export function Input(props: InputProps) {
  return (
    <Base
      data-testid="input"
      focusBorderColor="primaryGreen"
      errorBorderColor="error"
      textColor="white"
      {...props}
    />
  );
}
