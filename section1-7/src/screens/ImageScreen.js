import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        image={require(`../../assets/forest.jpg`)}
        title="Forest"
        score={10}
      />
      <ImageDetail
        image={require(`../../assets/beach.jpg`)}
        title="Beach"
        score={8}
      />
      <ImageDetail
        image={require(`../../assets/mountain.jpg`)}
        title="Mountain"
        score={6}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
