import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    paddingVertical: 5,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
  },
});