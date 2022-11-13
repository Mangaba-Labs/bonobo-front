import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },

  colors: {
    primaryGreen: "#27E8A7",
    primaryGreenHover: "#21b885",
    greenDark: "#21b885",
    lightBlue: "#1DC6F5",
    lightBlueHover: "#19a7cf",
    error: "#F20530",
    white: "#FFFFFF",
    black: "#111111",
    background: "#17181B",
    purple: "#A259FF",
    darkCard: "rgba(0,0,0,0.5)",
    gray: {
      900: "#17181B",
      700: "#282A2D",
      650: "#2B2B2B",
      600: "#3C4043",
      400: "#5F6368",
      300: "#80868B",
      200: "#D9D9D9",
      100: "#b1b2b3",
    },
  },
});

export { theme };
