import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("test");
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "norman",
        },
      });
      setResults(res.data.businesses);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  // bad code
  // call searchApi when component is first rendered
  // searchApi("pasta");
  // causes an infinite loop of api calls

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>Found {results.length} results</Text>
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
