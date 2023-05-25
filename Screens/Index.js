import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
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
});
