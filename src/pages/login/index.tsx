import { Box, Text } from "@chakra-ui/layout";
import { Heading, Link } from "@chakra-ui/react";
import { Background, Button, Input, LogoWithText } from "../../components";

export default function Login() {
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
            Welcome !
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
          height="28rem"
          justifyContent="center"
          flexDirection="column"
          pb="1rem"
          px="3rem"
          width="27rem"
        >
          <Heading
            color="white"
            fontSize="2.8rem"
            alignText="left"
            mb=".9rem"
            width="100%"
          >
            Login
          </Heading>
          <Input my="1rem" placeholder="Email" />
          <Input my="1rem" placeholder="Password" />
          <Link
            href="/recover-password"
            color="primaryGreen"
            textAlign="right"
            width="100%"
          >
            Forgot password?
          </Link>
          <Button scheme="green" my="1rem" textColor="black">
            Login
          </Button>
          <Box>
            <Text color="white" textAlign="left" fontSize="1rem" width="100%">
              {"Doesn't have an account yet? "}
              <Link href="/register" fontWeight="bold" color="primaryGreen">
                Sign Up
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </Background>
  );
}
