import { Box, Text } from "@chakra-ui/layout";
import { Heading, Link } from "@chakra-ui/react";
import { Background, Button, Input, LogoWithText } from "../../components";

export default function Register() {
  return (
    <Background>
      <Box pl="4%" pt="2%" position="absolute">
        <LogoWithText height="6rem" />
      </Box>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        flexDir="row"
        height="100%"
        width="100%"
        px="5%"
        py="5%"
      >
        <Box height="28rem" width="40rem">
          <Heading color="white" fontSize="4rem" mb="2rem">
            Register
          </Heading>
          <Text color="white" width="85%">
            Welcome to Bonobo store, where you can buy any digital asset that
            you can imagine, be ready to adquire all type of items, skins, 3D
            models, nfts and much more.
          </Text>
          <Button scheme="green" mt="5rem" width="20rem" variant="outline">
            Learn more
          </Button>
        </Box>

        <Box
          backgroundColor="gray.700"
          display="flex"
          alignItems="center"
          height="36rem"
          justifyContent="center"
          flexDirection="column"
          pb="1rem"
          px="3rem"
          width="27rem"
        >
          <Heading
            color="white"
            fontSize="2.8rem"
            textAlign="left"
            mb=".9rem"
            width="100%"
          >
            Register
          </Heading>
          <Input my="1rem" placeholder="Name" />
          <Input my="1rem" placeholder="Email" />
          <Input my="1rem" placeholder="Password" />
          <Input my="1rem" placeholder="Confirm Password" />
          <Button scheme="green" mt="3rem" textColor="black">
            Create account
          </Button>
        </Box>
      </Box>
    </Background>
  );
}
