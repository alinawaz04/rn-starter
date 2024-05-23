import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("test");
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
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

  return [searchApi, results, error];
};
