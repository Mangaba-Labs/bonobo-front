import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Link, Text } from "@chakra-ui/layout";
import { BackButton, Button, Header } from "../../components";
import Token from "../../assets/images/token.svg";
import { useState } from "react";

export default function CreateProduct() {
  const [selected, setSelected] = useState(0);
  const categories = [
    { id: 1, name: "Games" },
    { id: 2, name: "3D Models" },
    { id: 3, name: "Art" },
    { id: 4, name: "NFT" },
    { id: 5, name: "Other" },
  ];

  function onPressCategory(id: number) {
    setSelected(id);
  }

  return (
    <Box
      bg="background"
      display="flex"
      flexDir="column"
      height="100vh"
      width="100vw"
    >
      <Box width="100%">
        <Header />
      </Box>
      <Box
        alignSelf="center"
        bg="gray.700"
        borderRadius="0.4rem"
        my="4rem"
        pt="2rem"
        pb="7rem"
        px="3rem"
        width="80rem"
      >
        <BackButton href="/profile" />
        <Box display="flex" flexDir="column" mt="2rem" mx="2rem">
          <Text fontSize="2rem" fontWeight="bold">
            What are you going to announce?
          </Text>
          <Text mt="1rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            scelerisque scelerisque mi. Fusce fermentum purus non maximus
            maximus. Vivamus consectetur turpis ac ipsum fermentum consequat.
          </Text>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            flexDir="row"
            my="5rem"
            mx="2rem"
          >
            {categories.map((c) => (
              <Box
                align="center"
                cursor="pointer"
                key={c.id}
                width="8rem"
                onClick={() => onPressCategory(c.id)}
              >
                <Box
                  alignItems="center"
                  bg={selected === c.id ? "gray.600" : "gray.700"}
                  borderRadius="0.4rem"
                  borderColor={selected === c.id ? "primaryGreen" : "gray.700"}
                  borderWidth="1px"
                  display="flex"
                  height="8rem"
                  justifyContent="center"
                  mb="1rem"
                  width="100%"
                  _hover={{
                    background: "gray.600",
                  }}
                >
                  <Token height="3rem" width="3rem" />
                </Box>
                <Text>{c.name?.toUpperCase()}</Text>
              </Box>
            ))}
          </Box>
          <Box alignItems="flex-end" display="flex" flexDir="column">
            <Link href="/create-product/description">
              <Button
                rightIcon={<ChevronRightIcon height="1.5rem" width="1.5rem" />}
                textColor="black"
                scheme="green"
                width="17rem"
                disabled={selected <= 0}
              >
                Next
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
