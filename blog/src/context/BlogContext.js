import createDataContext from "./createDataContext";

/* CONTEXT
- moves info from a parent to some nested child
- complicated to setup, lots of special terms
- easy to communicate data from a parent to super nested child
*/

const reducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost },
  []
);
