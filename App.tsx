import { StatusBar } from "expo-status-bar";
import { Image, View, Text, Pressable } from "react-native";

function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: 54,
        }}
      >
        <Image
          source={require("./assets/images/moon.jpeg")}
          style={{
            width: 320,
            height: 440,
            borderRadius: 18,
          }}
        />
      </View>
      <View
        style={{
          width: 320,
          height: 68,
          marginHorizontal: 20,
          alignItems: "center",
          justifyContent: "center",
          padding: 3,
        }}
      >
        <Pressable
          style={{
            borderRadius: 10,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{ color: "white" }}
            onPress={() => {
              alert("You pressed me!");
            }}
          >
            Press me!
          </Text>
        </Pressable>
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}

export default App;
