import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease, colorVal }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
      <Text>{colorVal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
