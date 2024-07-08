import { View } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSanaTheme } from "@/ui";

export default function Page() {
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
    </View>
  );
}
