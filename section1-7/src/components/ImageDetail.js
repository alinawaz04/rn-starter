import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, image, score }) => {
  console.log(image);
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
