import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSanaTheme } from "@/ui";

export default function HomePage() {
  const insets = useSafeAreaInsets();
  const theme = useSanaTheme();

  return (
    <View style={{ paddingTop: insets.top }}>
      <Text
        variant="headlineLarge"
        style={{
          color: theme.colors.text,
        }}
      >
        Home page
      </Text>

      <Button
        mode="contained"
        onPress={() => {
          alert("Pressed");
        }}
      >
        Go to 404
      </Button>
    </View>
  );
}
