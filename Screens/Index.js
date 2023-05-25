import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/icon.png")}
        style={styles.imgHeader}
      />
      <Text style={styles.txtHeader}>Bienvenidos...</Text>
      <Text style={styles.txtH6}>
        Hi, I'm Joao, I work as an Application Specialist in addition to making
        WEB projects for companies as well as personal pages.{"\n"}I like to
        keep learning about new technologies in an empirical way but I focus
        more on strengthening the knowledge already acquired.{"\n"}I consider
        myself a leader and I don't mind working in a team.{"\n"}Basketball is
        part of my hobbies as well as riding a motorcycle.
      </Text>
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

  txtHeader: {
    fontStyle: "italic",
    fontSize: 45,
    fontWeight: "bold",
  },

  imgHeader: {
    width: 200,
    height: 100,
  },

  txtH6: {
    fontSize: 15,
  },
});
