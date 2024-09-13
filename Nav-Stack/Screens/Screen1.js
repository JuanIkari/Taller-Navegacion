import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Screen 1</Text>
      <Button
        title="Ir a la pantalla 2"
        onPress={() => navigation.navigate("Screen2")}
        style={styles.button}
      />
      <Button
        title="Ir a la pantalla 3"
        onPress={() => navigation.navigate("Screen3")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    paddingBottom: 10,
  },
});
