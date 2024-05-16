import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

/* APP/STATE LIFECYCLE

- App starts up
- We navigate to CounterScreen. `counter` piece of state is init to default (0)
- User taps on "increase" button, onPress callback runs
- "onPress" calls "setCounter", and updates its value
- After a brief pause - react automatically rerenders or reruns the CounterScreen
- CounterScreen was already ran once, so the state of `counter` is not initialized again
- `counter` now has an updated value of 1
- We return some JSX that references the updated `counter` variable

*/

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
