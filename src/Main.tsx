import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Header } from "./components/Header";
import theme from "./theme";

export default function Main() {
  return (
    <View>
      <StatusBar backgroundColor={theme.colors.secondary} style="light" />
      <Header />
    </View>
  );
}
