import * as React from "react";
import { View, Text } from "react-native";

// Esta pantalla puede recibir el objeto 'navigation', aunque no es necesario para este ejemplo
export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* Contenido simple de la pantalla Settings */}
      <Text>QuizScreen</Text>
    </View>
  );
}
