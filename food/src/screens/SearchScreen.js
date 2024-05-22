import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import Results from "../components/Results";

// useEffect
// second arg of useEffect hook:
//  no arg - run function in first arg every time component is rendered
//  empty array arg (e.g []) - run function in first arg when component is first rendered
//  arg with value (e.g. [value]) - run function in first arg when component is first rendered and when 'value' changes.

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    // price === "$" || price === "$$" || price === "$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>Found {results.length} results</Text>
      <Results results={filterResultsByPrice("$")} title="Cost Effective" />
      <Results results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <Results results={filterResultsByPrice("$$$")} title="Big Spender" />
      <Results results={filterResultsByPrice("$$$$")} title="Very Expensive" />
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
