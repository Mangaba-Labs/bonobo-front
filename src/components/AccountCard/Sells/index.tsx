import { Box, Text, Image, Link, LinkBox } from "@chakra-ui/react";
import { useContext } from "react";
import { Button } from "../..";
import Edit from "../../../assets/images/edit.svg";
import Shop from "../../../assets/images/shop.svg";
import { ProfileContext } from "../context";

export function MySells() {
  const { setScreen } = useContext(ProfileContext);

  function onPressEdit() {
    setScreen("editProduct");
  }

  return (
    <Box height="100%" width="100%" overflowY="scroll">
      <Text fontSize="3rem" fontWeight="bold" mb="2rem">
        My Sells
      </Text>
      <Link href="/create-product">
        <Button
          rightIcon={<Shop height="1.3rem" width="1.3rem" />}
          scheme="green"
          textColor="black"
          mb="2rem"
          py="1.5rem"
          width="67rem"
        >
          New Sale
        </Button>
      </Link>
      <Text fontSize="1.1rem" fontWeight="bold">
        On Sale
      </Text>

      <Box
        alignItems="center"
        bg="darkCard"
        borderRadius="0.4rem"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        my="1.7rem"
        px="2rem"
        py="1rem"
        width="67rem"
      >
        <Box
          alignItems="flex-start"
          display="flex"
          flexDirection="row"
          justifyContent="normal"
        >
          <Image
            alt="product image"
            borderRadius=".4rem"
            height="5rem"
            width="5rem"
            fit="cover"
            mr="1rem"
            src="https://i.pinimg.com/236x/dd/b3/b5/ddb3b52fd9e39af5af2a628900c8f89f--funny-monkey-pictures-random-pictures.jpg"
          />
          <Box>
            <Box alignItems="center" display="flex" flexDirection="row">
              <Text fontWeight="bold">Product:</Text>
              <Text fontWeight="400" ml="0.5rem">
                Fulano de Tal
              </Text>
            </Box>
            <Box
              alignItems="flex-start"
              display="flex"
              flexDirection="row"
              mt="0.7rem"
            >
              <Text fontWeight="bold">Description: </Text>
              <Text fontWeight="400" ml=".5rem" width="22rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse scelerisque scelerisque mi.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text fontWeight="bold">Valor: </Text>
          <Text fontWeight="400" ml=".5rem">
            $ 99.99
          </Text>
        </Box>
        <Link href={`/edit-product/${Math.random()}`}>
          <Button
            leftIcon={<Edit height="1rem" width="1rem" />}
            scheme="green"
            textColor="black"
            width="10rem"
          >
            Edit
          </Button>
        </Link>
      </Box>
      <Text fontSize="1.1rem" fontWeight="bold">
        Sales History
      </Text>
      <Box
        alignItems="center"
        bg="darkCard"
        borderRadius="0.4rem"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        my="1.7rem"
        px="2rem"
        py="1rem"
        width="67rem"
      >
        <Box
          alignItems="flex-start"
          display="flex"
          flexDirection="row"
          justifyContent="normal"
        >
          <Image
            alt="product image"
            borderRadius=".4rem"
            height="5rem"
            width="5rem"
            fit="cover"
            mr="1rem"
            src="https://i.pinimg.com/236x/dd/b3/b5/ddb3b52fd9e39af5af2a628900c8f89f--funny-monkey-pictures-random-pictures.jpg"
          />
          <Box>
            <Box alignItems="center" display="flex" flexDirection="row">
              <Text fontWeight="bold">Product:</Text>
              <Text fontWeight="400" ml="0.5rem">
                Fulano de Tal
              </Text>
            </Box>
            <Box
              alignItems="flex-start"
              display="flex"
              flexDirection="row"
              mt="0.7rem"
            >
              <Text fontWeight="bold">Description: </Text>
              <Text fontWeight="400" ml=".5rem" width="22rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse scelerisque scelerisque mi.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text fontWeight="bold">Valor: </Text>
          <Text fontWeight="400" ml=".5rem">
            $ 99.99
          </Text>
        </Box>
        <Button
          leftIcon={<Edit height="1rem" width="1rem" />}
          scheme="green"
          textColor="black"
          width="10rem"
          disabled
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
}
