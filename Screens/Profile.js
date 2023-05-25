import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../assets/img/yo.png")}
        style={styles.imgHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4ECF7",
    alignItems: "center",
    justifyContent: "center",
  },

  imgHeader: {
    width: 400,
    height: 600,
    margin: 10,
  },
});
