import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { Button, Header, ProductCard } from "../../components";

export default function ProductDetails() {
  return (
    <Box alignItems="center" backgroundColor="background" display="flex" flexDirection="column" height="100%" width="100%">
      <Box width="100%">
        <Header />
      </Box>
      <Box alignItems="center" mt="2rem" display="flex" justifyContent="center" width="100%">
        <Box bg="gray.700" borderRadius=".4rem" display="flex" flexDirection="column" width="90rem" px="5rem" py="5rem">
          <Box display="flex" flexDirection="row" width="100%">
            <Box display="flex" flexDirection="row" mr="5rem" width="45%">
              <Box display="flex" flexDirection="column">
                <Image
                  borderRadius=".4rem"
                  height="6rem"
                  src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                  fit="cover"
                  width="6rem"
                  mb="1.5rem"
                />
                <Image
                  borderRadius=".4rem"
                  height="6rem"
                  src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                  fit="cover"
                  width="6rem"
                  mb="1.5rem"
                />
                <Image
                  borderRadius=".4rem"
                  height="6rem"
                  src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                  fit="cover"
                  width="6rem"
                  mb="1.5rem"
                />
                <Image
                  borderRadius=".4rem"
                  height="6rem"
                  src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                  fit="cover"
                  width="6rem"
                  mb="1.5rem"
                />
              </Box>
              <Box ml="2.5rem">
                <Image
                  borderRadius=".4rem"
                  height="28.5rem"
                  src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                  fit="cover"
                  width="28.5rem"
                />

              </Box>
            </Box>
            <Box display="flex" flexDirection="column" height="28.5rem" justifyContent="space-between" width="32.5rem">
              <Text color="primaryGreen" fontWeight="bold" fontSize="1.8rem" >
                Product Name
              </Text>
              <Text mt="-2rem" noOfLines={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque scelerisque mi. Fusce fermentum purus non maximus maximus.
              </Text>
              <Text fontWeight="medium" fontSize="3rem" mt="-3rem">$ 70.00</Text>
              <Text color="lightBlue" mt="-4rem">or 12x interest-free installments of $ 5.83</Text>
              <Button scheme="green" mb="-3rem" width="28.5rem">Buy Now</Button>
              <Button scheme="blue" textColor="lightBlue" width="28.5rem" variant="outline">Add to cart</Button>
            </Box>
          </Box>
          <Box borderTopWidth="1px" borderColor="gray.400" mt="6rem" pt="6rem">
            <Text fontSize="2rem" fontWeight="medium" mb="0.7rem">Description</Text>
            <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque scelerisque mi. Fusce fermentum purus non maximus maximus. Vivamus consectetur turpis ac ipsum fermentum consequat. </Text>

            <Text fontSize="2rem" fontWeight="medium" mb="0.7rem" mt="3rem">Specifications</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque scelerisque mi. Fusce fermentum purus non maximus maximus. Vivamus consectetur turpis ac ipsum fermentum consequat. </Text>
          </Box>
        </Box>
      </Box>
      <Box alignSelf="center" alignItems="flex-start" display="flex" flexDirection="column" my="4rem" width="90rem">
        <Text fontSize="2rem" mb="2rem">Related Products</Text>
        <Box display="flex" flexDirection="row">
          <ProductCard id={Math.random()} mr="2.5rem" />
          <ProductCard id={Math.random()} mr="2.5rem" />
          <ProductCard id={Math.random()} mr="2.5rem" />
          <ProductCard id={Math.random()} mr="2.5rem" />
          <ProductCard id={Math.random()} />
        </Box>
      </Box>
    </Box>
  );
}
