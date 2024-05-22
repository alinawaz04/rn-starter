import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

// useEffect
// second arg of useEffect hook:
//  no arg - run function in first arg every time component is rendered
//  empty array arg (e.g []) - run function in first arg when component is first rendered
//  arg with value (e.g. [value]) - run function in first arg when component is first rendered and when 'value' changes.

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

  // correct code
  useEffect(() => {
    searchApi("pasta");
  }, []); // array in second arg makes it so hook only runs when component is first rendered

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
