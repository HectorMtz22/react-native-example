import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a Header!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    paddingVertical: 5,
    paddingHorizontal: 30,
    backgroundColor: theme.colors.primary,
  },
  text: {
    fontSize: theme.fontSizes.title,
    color: "#fff",
  },
});
