import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function OptionsScreen() {
  const options = [
    { title: "Habilitar Notificaciones" },
    { title: "Cambiar Tema" },
    { title: "Ajustes de Privacidad" },
    { title: "Idioma" },
    { title: "Sincronizar Datos" },
    { title: "Acerca de la Aplicación" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => OptionPress(item)}
    >
      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const OptionPress = (item) => {
    alert(`Opción seleccionada: ${item.title}`);
  };

  return (
    <View style={styles.container}>
      <FlatList data={options} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  optionItem: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRadius: 5,
    marginVertical: 5,
  },
  optionText: {
    fontSize: 16,
  },
});
