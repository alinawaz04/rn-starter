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
    { name: "Friend 1" },
    { name: "Friend 2" },
    { name: "Friend 3" },
    { name: "Friend 4" },
    { name: "Friend 5" },
    { name: "Friend 6" },
    { name: "Friend 7" },
    { name: "Friend 8" },
    { name: "Friend 9" },
  ];
  return (
    <FlatList
      horizontal // makes list scroll horizontally
      showsHorizontalScrollIndicator={false} // hides horizontal scroll bar - also exists for vertical
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
