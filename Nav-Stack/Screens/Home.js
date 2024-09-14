import * as React from "react";
import { Button, View, Text } from "react-native";

export default function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Button
        title="Ir a la pantalla 1"
        onPress={() => navigation.navigate("Screen1")}
      />
      <Button
        title="Ir a la pantalla 2"
        onPress={() => navigation.navigate("Screen2")}
      />
      <Button
        title="Ir a la pantalla 3"
        onPress={() => navigation.navigate("Screen3")}
      />
      <Button
        title="Ir a la pantalla 1 replace"
        onPress={() => navigation.replace("Screen1")}
      />
    </View>
  );
}
