import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header, ProductCard } from "../components";

const Home: NextPage = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <Box
      backgroundColor="background"
      display="flex"
      flexDirection="column"
      height="100%"
      width="100%"
      maxWidth="100vw"
    >
      <Header />
      <Box
        alignSelf="center"
        alignItems="center"
        display="flex"
        justifyContent="center"
        mt="2rem"
        width="95vw"
      >
        <Box direction="row" display="flex" flexWrap="wrap" width="95vw">
          {items.map((i, index) => (
            <ProductCard key={index} id={i} mx="1.3rem" my="1rem" />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
