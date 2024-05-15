import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail image={require(`../../assets/forest.jpg`)} title="Forest" />
      <ImageDetail image={require(`../../assets/beach.jpg`)} title="Beach" />
      <ImageDetail
        image={require(`../../assets/mountain.jpg`)}
        title="Mountain"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
