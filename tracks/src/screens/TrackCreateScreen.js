import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import { Text } from "react-native-elements";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 50 }}>
      <Text h2>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
