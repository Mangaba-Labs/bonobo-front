import { Image } from "@chakra-ui/image";
import { Box, Link, Text } from "@chakra-ui/layout";

interface ProductCardProps {
  id: number | string;
  mx?: number | string;
  my?: number | string;
  ml?: number | string;
  mr?: number | string;
}

export function ProductCard(props: ProductCardProps) {
  return (
    <Link
      textDecoration="none"
      _hover={{ textDecoration: "none" }}
      href={`/product/${props.id}`}
    >
      <Box
        backgroundColor="white"
        borderRadius=".4rem"
        cursor="pointer"
        mx={props.mx}
        my={props.mx}
        mr={props.mr}
        ml={props.ml}
        pb="1rem"
        transition="transform .1s"
        _hover={{
          transform: "scale(1.025)",
        }}
        height="22rem"
        width="16rem"
      >
        <Image
          alt="product image"
          borderTopRadius=".4rem"
          src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          fit="cover"
        />
        <Box px="1rem">
          <Text color="black" fontSize="1.2rem" fontWeight="bold" noOfLines={1}>
            Guaravita
          </Text>
          <Text color="black" fontSize="0.9rem" noOfLines={3}>
            Um belo copão de guaravita, uma bebida refrescante à base de
            guaraná.
          </Text>
          <Text
            color="greenDark"
            textAlign="right"
            fontSize="1.1rem"
            fontWeight="bold"
            mt="2rem"
          >
            R$ 3,99
          </Text>
        </Box>
      </Box>
    </Link>
  );
}
