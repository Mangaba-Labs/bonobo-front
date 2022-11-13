import { Box, Text, Link } from "@chakra-ui/layout";
import Head from "next/head";
import NotFoundImage from "../assets/images/404.svg";
import { Button, Header } from "../components";

export default function NotFound() {
  return (
    <Box
      backgroundColor="background"
      height="100vh"
      width="100vw"
      overflow="hidden"
    >
      <Head>Not Found</Head>
      <Header />
      <Box
        alignItems="center"
        backgroundColor="background"
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        height="100%"
        width="100%"
        justifyContent="center"
      >
        <Box width="35rem">
          <Text fontSize="2rem" fontWeight="bold">
            OOPS !!
          </Text>
          <Text fontSize="2rem">Error: 404, page not found</Text>
          <Text fontSize="1.2rem">
            Lorem ipsumd olor sit amet, conmsectetur adipiscing elit.
            Suspendisse scelerisque scelerisque mi. Fusce fermentum purus non
            maximum maximums. Vivamus consectetur turpis ac ipsum fermentum
            consequat 0
          </Text>
          <Link href="/">
            <Button scheme="green" mt="2rem" variant="outline" width="15rem">
              Return
            </Button>
          </Link>
        </Box>
        <Box height="35vh">
          <NotFoundImage height="100%" width="100%" />
        </Box>
      </Box>
    </Box>
  );
}
