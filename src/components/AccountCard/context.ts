import { createContext } from "react";

export const ProfileContext = createContext({
  screen: "",
  setScreen: (screen: string) => {},
});
