import createDataContext from "./createDataContext";

/*
Track Context: Saving + retrieving existing tracks from out API
*/

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => (name, locations) => {
  console.log(name, locations.length);
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
