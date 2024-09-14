import * as React from "react";
import { Button, View, Text } from "react-native";

export default function Screen3({ navigation, route }) {
  const { message } = route.params || {};

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Screen 3</Text>
      <Text>{message}</Text>
      <Button
        title="Ir a la pantalla 1"
        onPress={() => navigation.navigate("Screen1")}
      />
      <Button
        title="Ir a la pantalla 2"
        onPress={() => navigation.navigate("Screen2")}
      />
      <Button title="Regresar" onPress={() => navigation.goBack()} />
      <Button
        title="reset"
        onPress={() => navigation.reset({ routes: [{ name: "Home" }] })}
      />
    </View>
  );
}
