import React, { useReducer, useState } from "react";
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

const reducer = (state, action) => {
  // state === {counter: number}
  // action === {type: increase || type: decrease, payload: 1}
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: 1 });
        }}
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
