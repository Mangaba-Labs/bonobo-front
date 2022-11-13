import { CloseIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { BackButton, Button, Header, Input } from "../../components";

export default function EditProduct() {
  return (
    <Box
      alignItems="flex-start"
      bg="background"
      display="flex"
      flexDir="column"
      height="100vh"
      width="100%"
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
        width="85rem"
      >
        <BackButton href="/profile" />
        <Text mt="2rem" ml="2rem" fontSize="2rem" fontWeight="bold">
          Edit Product
        </Text>
        <Box
          mt="4rem"
          alignItems="flex-start"
          display="flex"
          flexDir="row"
          justifyContent="space-between"
        >
          <Box alignItems="center" display="flex" flexDir="column" width="40%">
            <Box
              alignItems="center"
              bg="gray.600"
              borderRadius="0.4rem"
              cursor="pointer"
              display="flex"
              height="7rem"
              justifyContent="center"
              mb="1.5rem"
              width="7rem"
            >
              <CloseIcon
                height="1.3rem"
                width="1.3rem"
                color="white"
                transform="rotate(45deg)"
              />
            </Box>
            <Text>Add a product photo</Text>
            <Box alignItems="center" display="flex" flexDir="row" mt="2rem">
              <Box
                bg="gray.200"
                borderRadius="0.4rem"
                mr="1rem"
                h="4rem"
                w="4rem"
              />
              <Box
                bg="gray.200"
                borderRadius="0.4rem"
                mr="1rem"
                h="4rem"
                w="4rem"
              />
              <Box
                bg="gray.200"
                borderRadius="0.4rem"
                mr="1rem"
                h="4rem"
                w="4rem"
              />
              <Box
                bg="gray.200"
                borderRadius="0.4rem"
                mr="1rem"
                h="4rem"
                w="4rem"
              />
              <Box bg="gray.200" borderRadius="0.4rem" h="4rem" w="4rem" />
            </Box>
          </Box>
          <Box width="40rem">
            <Input placeholder="Name" mb="1.2rem" />
            <Input placeholder="Value" mb="1.2rem" />
            <Textarea
              color="white"
              placeholder="Description"
              textAlign="start"
              mb="1.2rem"
            />
            <Button height="3rem" scheme="green" textColor="black">
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
