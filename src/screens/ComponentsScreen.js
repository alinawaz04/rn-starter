import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  // var showed inside of JSX can be anything but JS object
  const greeting = "Hi there";
  // can assign JSX els to var, then show that var inside of JSX block
  const greetingElement = <Text>Hello to you</Text>;

  return (
    // can assemble different JSX elements like normal HTML
    <View>
      {/* style is built in prop of Text */}
      <Text style={styles.textStyle}>OutlineOutlineOutline</Text>
      {/* can refer to js vars inside of JSX block by using curly braces */}
      <Text>{greeting}</Text>
      {greetingElement}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
