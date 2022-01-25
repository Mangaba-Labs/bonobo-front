import { extendTheme } from "@chakra-ui/react";

const colors = {
  primaryGray: "#27E8A7",
  lightBlue: "#1DC6F5",
  error: "#F20530",
  white: "#FFFFFF",
  black: "#111111",
  purple: "#A259FF",
  gray: {
    700: "#282A2D",
    600: "#3C4043",
    300: "#5F6368",
  },
};

const theme = extendTheme({ colors });

export { theme };
