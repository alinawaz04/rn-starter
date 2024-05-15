import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

/* Buttons with React Native

- Button - simple primitive component for showing button and detecting press - little customization
- TouchableOpacity - very customizable primitive element that can detect a press on just about any kind of element.

*/

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Outline</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to Components Demo"
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
