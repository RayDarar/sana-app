import { useColorScheme } from "react-native";
import { MD3LightTheme, MD3DarkTheme, useTheme } from "react-native-paper";

type SanaTheme = {
  dark: boolean;
  roundness: number;
  fonts: (typeof MD3LightTheme)["fonts"];
  colors: (typeof MD3LightTheme)["colors"] & {
    text: string;
  };
};

export const useRootTheme = ({
  preferredScheme,
}: {
  preferredScheme: "dark" | "light";
}): SanaTheme => {
  const colorScheme = useColorScheme();

  const scheme = preferredScheme ?? colorScheme ?? "light";

  return scheme === "light"
    ? {
        ...MD3LightTheme,
        colors: {
          ...MD3LightTheme.colors,
          text: "#333333",
        },
      }
    : {
        ...MD3DarkTheme,
        colors: {
          ...MD3DarkTheme.colors,
          text: "#ffffff",
        },
      };
};

export const useSanaTheme = () => useTheme<ReturnType<typeof useRootTheme>>();
