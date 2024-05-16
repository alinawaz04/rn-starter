import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setRed(red + 10)}
        onDecrease={() => setRed(red - 10)}
        colorVal={red}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + 10)}
        onDecrease={() => setGreen(green - 10)}
        colorVal={green}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + 10)}
        onDecrease={() => setBlue(blue - 10)}
        colorVal={blue}
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
