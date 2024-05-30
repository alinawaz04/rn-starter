import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = ({ navigation, headerShown = false }) => {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up For Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signUp}
      />
      <NavLink
        text="Already have an account? Sign in instead"
        routeName="SignIn"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 300,
  },
});

export default SignUpScreen;
