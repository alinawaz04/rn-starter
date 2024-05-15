import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

/*
lists - we usually begin with an array of objects
- we will utilize the FlatList primitive React Native element
- we will pass is two props - data (array of data) and renderItem prop (turns each individual item into an element)
- this is the react native equivalent to mapping array in react on web.
    - FlatList is well optimized specifically for mobile
*/

/* why is a key prop necessary?
- a key prop lets react know what specific object is changed/deleted. without it, react rebuilds the entire list after any change/deletion
- performance optimization
*/

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", key: "1" },
    { name: "Friend 2", key: "2" },
    { name: "Friend 3", key: "3" },
    { name: "Friend 4", key: "4" },
    { name: "Friend 5", key: "5" },
    { name: "Friend 6", key: "6" },
    { name: "Friend 7", key: "7" },
    { name: "Friend 8", key: "8" },
    { name: "Friend 9", key: "9" },
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
