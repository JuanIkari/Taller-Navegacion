import * as React from "react";
import { Button, View, Text } from "react-native";

export default function Screen3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Screen 3</Text>
      <Button
        title="Ir a la pantalla 1"
        onPress={() => navigation.navigate("Screen1")}
      />
      <Button
        title="Ir a la pantalla 2"
        onPress={() => navigation.navigate("Screen2")}
      />
    </View>
  );
}
