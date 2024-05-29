import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <Text>SignUpScreen</Text>
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Button
        title="Go to Main Flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
