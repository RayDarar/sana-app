import React from "react";

import { App } from "@/app/app";
import { useRootTheme } from "@/app/theme";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

function Main() {
  const theme = useRootTheme();

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default Main;
