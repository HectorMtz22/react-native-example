import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Header } from "./components/Header";

export default function Main() {
  return (
    <View>
      <StatusBar backgroundColor="#000" style="light" />
      <Header />
    </View>
  );
}
