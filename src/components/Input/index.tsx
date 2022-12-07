import { Input as Base, InputProps as BaseProps } from "@chakra-ui/input";
import { useState } from "react";

interface InputProps extends BaseProps {
  type?: "email" | "password" | "name" | "none";
}

export function Input(props: InputProps) {
  const [isInvalid, setInvalid] = useState(false);

  function focusOut() {
    if (props.type === "email") {
      console.log("email");
    }
  }
  return (
    <Base
      data-testid="input"
      focusBorderColor="lightBlue"
      errorBorderColor="error"
      textColor="white"
      onBlur={focusOut}
      isInvalid={isInvalid}
      height="2.8rem"
      {...props}
    />
  );
}
