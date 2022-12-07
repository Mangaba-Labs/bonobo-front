import { Box, Text } from "@chakra-ui/layout";
import { Heading, Link } from "@chakra-ui/react";
import { useState } from "react";
import { Background, Button, Input, LogoWithText } from "../../components";
import NProgress from "nprogress";
import { AuthService } from "../../services";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useMount } from "../../hooks";
import { AuthHelper } from "../../helpers/AuthHelper";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useMount(() => {
    if (!AuthHelper.isAccessTokenExpired()) {
      router.push("/");
    }
  });

  function onClickLogin() {
    NProgress.start();
    AuthService.auth(username, password)
      .then((res) => {
        handleSuccessSignIn(res);
      })
      .catch((e) => {
        callToast(e.status);
        console.warn(e);
      })
      .finally(() => NProgress.done());
  }

  function handleSuccessSignIn(response: any) {
    toast.success(`😀	Welcome back`);
    localStorage.setItem("access-token", response.data.access_token);
    router.push("/");
  }

  function callToast(status: number) {
    switch (status) {
      case 403:
        toast.warn(`😥 Invalid email or password`);
        break;
      default:
        toast.error(`😥 An unexpected error occured`);
    }
  }

  function onChangeUsername(e: any) {
    setUsername(e.target.value);
  }

  function onChangePassword(e: any) {
    setPassword(e.target.value);
  }

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
            textAlign="left"
            mb=".9rem"
            width="100%"
          >
            Login
          </Heading>
          <Input
            onChange={onChangeUsername}
            value={username}
            my="1rem"
            placeholder="Email"
          />
          <Input
            onChange={onChangePassword}
            value={password}
            my="1rem"
            placeholder="Password"
            type="password"
          />
          <Link
            href="/recover-password"
            color="primaryGreen"
            textAlign="right"
            width="100%"
          >
            Forgot password?
          </Link>
          <Button
            scheme="green"
            my="1rem"
            textColor="black"
            onClick={onClickLogin}
          >
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
