import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signUp = (dispatch) => {
  return ({ email, password }) => {
    // make api req to sign up with given email and password
    // if sign up, modify state, and say we are authenticated
    // if sign up fails, reflect error message
  };
};

const signIn = (dispatch) => {
  return ({ email, password }) => {
    // try to sign in
    // handle success by updating state
    // handle failure by showing error message
  };
};

const signOut = (dispatch) => {
  return () => {
    // somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { isSignedIn: false }
);
