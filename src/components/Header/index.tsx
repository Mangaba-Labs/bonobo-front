/* eslint-disable react/no-children-prop */
import { Box, Link, Text } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import { Logo } from "..";
import AccountCircle from "../../assets/images/account_circle.svg";
import Cart from "../../assets/images/cart.svg";

export function Header() {
  const isLogged = true;

  return (
    <Box>
      <Box
        alignItems="center"
        backgroundColor="#000"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        py="1rem"
        width="100%"
      >
        <Link display="flex" href="/">
          <Logo />
          <Text
            fontSize="1.7rem"
            fontWeight="bold"
            ml=".5rem"
            color="primaryGreen"
          >
            Bonobo
          </Text>
        </Link>
        <InputGroup width="25rem" mx="3rem" borderColor="gray.300">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input placeholder="Search" color="gray.300" />
        </InputGroup>
        <Link href={isLogged ? "/profile" : "/login"}>
          <Box
            alignItems="center"
            cursor="pointer"
            display="flex"
            justifyContent="center"
          >
            <AccountCircle height="1.5rem" width="1.5rem" />
            <Text color="#fff" fontWeight="medium" ml=".5rem" fontSize="1rem">
              {isLogged ? "Profile" : "Login/Sign up"}
            </Text>
          </Box>
        </Link>
        <Link href="/cart">
          <Box
            alignItems="center"
            cursor="pointer"
            display="flex"
            justifyContent="center"
            ml="2rem"
          >
            <Cart height="1.3rem" width="1.3rem" />
            <Text color="#fff" fontWeight="medium" ml=".5rem" fontSize="1rem">
              Cart
            </Text>
          </Box>
        </Link>
      </Box>
      <Box
        alignItems="center"
        backgroundColor="gray.700"
        color="#fff"
        display="flex"
        justifyContent="center"
        py=".5rem"
        width="100%"
      >
        <Link cursor="pointer" mx="1rem">
          GAMES
        </Link>
        <Link cursor="pointer" mx="1rem">
          3D MODELS
        </Link>
        <Link cursor="pointer" mx="1rem">
          ART
        </Link>
        <Link cursor="pointer" mx="1rem">
          NFT
        </Link>
        <Link cursor="pointer" mx="1rem">
          OTHERS
        </Link>
      </Box>
    </Box>
  );
}
