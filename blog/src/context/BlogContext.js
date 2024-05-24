import React from "react";

/* CONTEXT
- moves info from a parent to some nested child
- complicated to setup, lots of special terms
- easy to communicate data from a parent to super nested child
*/
const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={"hello"}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
