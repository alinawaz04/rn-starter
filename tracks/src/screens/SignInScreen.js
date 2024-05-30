import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignInScreen = () => {
  const { state, signIn, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signIn}
      />
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName="SignUp"
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 300,
  },
});

export default SignInScreen;
