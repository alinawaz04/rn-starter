import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 35.223586220217996 + i * 0.001,
      longitude: -97.51090820002473 + i * 0.01,
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 35.223586220217996,
        longitude: -97.51090820002473,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
