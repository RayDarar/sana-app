import { useColorScheme } from "react-native";
import { MD3LightTheme, MD3DarkTheme, useTheme } from "react-native-paper";

export const useRootTheme = () => {
  const colorScheme = useColorScheme();

  return colorScheme === "light"
    ? {
        ...MD3LightTheme,
      }
    : {
        ...MD3DarkTheme,
      };
};

export const useSanaTheme = () => useTheme<ReturnType<typeof useRootTheme>>();
