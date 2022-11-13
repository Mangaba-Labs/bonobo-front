import { Box, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { Button } from "../..";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

export function SignForm() {
  const [selected, setSelected] = useState("none");

  function onClickLogin() {
    setSelected("login");
  }

  function onClickSignUp() {
    setSelected("signUp");
  }

  function SelectComponent() {
    switch (selected) {
      case "login":
        return <Login />;
      case "signUp":
        return <SignUp />;
      default:
        return <Selector />;
    }
  }

  function Selector() {
    return (
      <Box
        alignItems="center"
        display="flex"
        flexDir="column"
        justifyContent="center"
        mt="3rem"
        width="20rem"
      >
        <Button scheme="green" onClick={onClickLogin}>
          Login
        </Button>
        <Text my="1rem">OR</Text>
        <Button scheme="green" onClick={onClickSignUp}>
          Sign Up
        </Button>
      </Box>
    );
  }

  return (
    <Box width="30rem">
      <Text fontSize="2rem" fontWeight="bold">
        Finalize Order
      </Text>
      <Text mt="1rem">
        Enter your information below and you will receive an email with your
        purchase details.
      </Text>
      <SelectComponent />
    </Box>
  );
}
