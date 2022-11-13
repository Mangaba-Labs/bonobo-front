import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Link, Text } from "@chakra-ui/layout";

interface Props {
  href: string;
}

export function BackButton({ href }: Props) {
  return (
    <Link href={href} maxWidth="10rem">
      <Box
        alignItems="center"
        borderRadius="0.4rem"
        display="flex"
        justifyContent="center"
        flexDir="row"
        py="0.4rem"
        width="7rem"
        _hover={{ backgroundColor: "gray.900" }}
      >
        <ArrowBackIcon color="gray.100" h="1.5rem" w="1.5rem" />
        <Text color="gray.100" ml="0.7rem" fontSize="0.9rem">
          Back
        </Text>
      </Box>
    </Link>
  );
}
