import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import theme from "../../theme";
import PhotoCards from "../PhotoCards";

const ListOfPhotos = () => {
  return (
    <FlatList data={[0, 1, 2, 3, 4]} renderItem={(item) => <PhotoCards />} />
  );
};

export default ListOfPhotos;
