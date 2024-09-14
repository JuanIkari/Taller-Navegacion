import * as React from "react";
import { Button, View, Text } from "react-native";

export default function Screen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Screen 2</Text>
      <Button
        title="Ir a la pantalla 1"
        onPress={() => navigation.navigate("Screen1")}
      />
      <Button
        title="Ir a la pantalla 3"
        onPress={() => navigation.navigate("Screen3")}
      />
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
}
