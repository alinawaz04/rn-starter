import React from "react";
import { Text, StyleSheet } from "react-native";

/* Buttons with React Native

- Button - simple primitive component for showing button and detecting press - little customization
- TouchableOpacity - very customizable primitive element that can detect a press on just about any kind of element.

*/
const HomeScreen = () => {
  return <Text style={styles.text}>Outline</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
