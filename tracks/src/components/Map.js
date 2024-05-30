import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 35.223586220217996,
        longitude: -97.51090820002473,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
