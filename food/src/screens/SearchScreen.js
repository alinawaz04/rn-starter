import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  console.log(term);

  return (
    <View style={styles.background}>
      <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} />
      <Text>SearchScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default SearchScreen;
