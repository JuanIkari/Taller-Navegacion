import * as React from "react";
import { Button, View, Text, Alert } from "react-native";

export default function Screen2({ navigation, route }) {
  const { message = "" } = route.params || {};

  React.useEffect(() => {
    const { Autorizacion } = route.params || {};

    if (Autorizacion) {
      Alert.alert("Acceso permitido", "Bienvenido a la pantalla 2");
    } else {
      Alert.alert(
        "Acceso denegado",
        "No tienes autorización para acceder a esta pantalla"
      );
      navigation.goBack();
    }
  }, [route.params]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Screen 2</Text>
      <Text>{message}</Text>
      <Button
        title="Ir a la pantalla 1"
        onPress={() => navigation.navigate("Screen1")}
      />
      <Button
        title="Ir a la pantalla 3"
        onPress={() =>
          navigation.navigate("Screen3", { message: "hola desde screen 2" })
        }
      />
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
}
