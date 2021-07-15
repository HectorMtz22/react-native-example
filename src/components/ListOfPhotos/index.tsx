import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../../theme";

const ListOfPhotos = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Mira</Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://www.syntonize.com/wp-content/uploads/2020/10/Flutter-vs-React-2.png",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: theme.fontSizes.subtitle,
  },
  card: {
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default ListOfPhotos;
