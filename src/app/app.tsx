import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const App = () => {
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
