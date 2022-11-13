import { CloseIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";

interface Props {
  name: string;
  price: string;
  id: number;
  image: string;
}

export function Product(props: Props) {
  function onPressClose() {
    console.log(props.id);
  }

  return (
    <Box
      alignItems="flex-start"
      borderBottomWidth="2px"
      borderBottomColor="gray.600"
      display="flex"
      justifyContent="space-between"
      mb="1.5rem"
      pb="1.5rem"
    >
      <Box alignItems="flex-start" display="flex" flexDir="row">
        <Image
          alt="Product image"
          borderRadius=".4rem"
          height="4.5rem"
          mr="1.3rem"
          width="4.5rem"
          src="https://preview.redd.it/a-monkey-smoking-a-cigar-close-up-90mm-film-grain-saturated-v0-nqquk8yw05r91.png?auto=webp&s=dfeae55e52aca402d5a642cd460dd767b7e59c06"
        />
        <Box ml=".5rem">
          <Text fontSize="1rem">Lorem ipsum</Text>
          <Text color="gray.200" fontSize="1rem" mt="1rem">
            $ 20.99
          </Text>
        </Box>
      </Box>
      <CloseIcon
        cursor="pointer"
        color="white"
        height="1rem"
        width="1rem"
        onClick={onPressClose}
      />
    </Box>
  );
}
