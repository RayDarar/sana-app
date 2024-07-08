import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRootTheme } from "@/ui/theme";
import {
  ErrorBoundary as BaseErrorBoundary,
  ErrorBoundaryProps,
  Stack,
} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return <BaseErrorBoundary {...props} />;
}

export default function Layout() {
  const theme = useRootTheme({ preferredScheme: "light" });

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar style="inverted" />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
        </Stack>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
