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
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 45 },
    { name: "Friend 3", age: 32 },
    { name: "Friend 4", age: 27 },
    { name: "Friend 5", age: 53 },
    { name: "Friend 6", age: 30 },
    { name: "Friend 7", age: 48 },
    { name: "Friend 8", age: 97 },
    { name: "Friend 9", age: 12 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
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
