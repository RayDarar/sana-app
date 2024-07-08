import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Button, PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRootTheme } from "./theme";

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar style="inverted" />
      <View>
        <Text>Hello, World!</Text>
        <Button icon="watch">Press Me</Button>
      </View>
    </SafeAreaView>
  );
};

export default function Layout() {
  const theme = useRootTheme();

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
