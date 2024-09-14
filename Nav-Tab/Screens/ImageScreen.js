import React from "react";
import { ScrollView, Image, StyleSheet, View } from "react-native";

export default function ImageScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/300.png/09f/fff" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/300.png/0bf/000" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/300.png/f09/000" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/300.png/0f0/fff" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/300.png/f0f/000" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/300.png/00f/fff" }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
});
