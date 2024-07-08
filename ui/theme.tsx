import { useColorScheme } from "react-native";
import { MD3LightTheme, MD3DarkTheme, useTheme } from "react-native-paper";

type SanaTheme = {
  dark: boolean;
  roundness: number;
  fonts: (typeof MD3LightTheme)["fonts"];
  colors: (typeof MD3LightTheme)["colors"] & {
    text: string;
    text80: string;
    text60: string;
    text30: string;
    system: string;
    system80: string;
    system60: string;
    system30: string;
    system10: string;
    status: {
      dangerous: string;
      bad: string;
      good: string;
    };
    backgroundExtra: string;
    activePrimary: string;
    activeSecondary: string;
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
          text: "#04021D",
          text80: "#36354A",
          text60: "#686777",
          text30: "#B3B5BD",
          system: "#554AF0",
          system80: "#776EF3",
          system60: "#9992F6",
          system30: "#CCC9FB",
          system10: "#EEEDFE",
          status: {
            dangerous: "#FF0000",
            bad: "#FF6B00",
            good: "#15AA2C",
          },
          background: "#FFFFFF",
          backgroundExtra: "#F8F8FA",
          activePrimary: "#2113E8",
          activeSecondary: "#6D61F2",
        },
      }
    : {
        ...MD3DarkTheme,
        colors: {
          ...MD3DarkTheme.colors,
          text: "#04021D",
          text80: "#36354A",
          text60: "#686777",
          text30: "#B3B5BD",
          system: "#554AF0",
          system80: "#776EF3",
          system60: "#9992F6",
          system30: "#CCC9FB",
          system10: "#EEEDFE",
          status: {
            dangerous: "#FF0000",
            bad: "#FF6B00",
            good: "#15AA2C",
          },
          background: "#FFFFFF",
          backgroundExtra: "#F8F8FA",
          activePrimary: "#2113E8",
          activeSecondary: "#6D61F2",
        },
      };
};

export const useSanaTheme = () => useTheme<ReturnType<typeof useRootTheme>>();
