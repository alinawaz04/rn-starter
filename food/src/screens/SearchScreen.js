import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

// useEffect
// second arg of useEffect hook:
//  no arg - run function in first arg every time component is rendered
//  empty array arg (e.g []) - run function in first arg when component is first rendered
//  arg with value (e.g. [value]) - run function in first arg when component is first rendered and when 'value' changes.

const SearchScreen = ({ navigation }) => {
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

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Very Expensive"
          navigation={navigation}
        />
      </ScrollView>
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
