import { Box } from "@chakra-ui/layout";
import Pattern from "../../assets/images/pattern.svg";

export function Background(props: any) {
  return (
    <Box bg="background" width="100vw" height="100vh" data-testid="background">
      <Box
        position="absolute"
        zIndex={2}
        width="100%"
        height="100%"
        display="flex"
      >
        {props.children}
      </Box>
      <Box width="100%" height="100%" position="absolute" zIndex={1}>
        <Pattern height="100%" width="100%" />
      </Box>
    </Box>
  );
}
