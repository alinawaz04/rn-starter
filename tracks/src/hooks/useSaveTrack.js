import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
  } = useContext(LocationContext);

  const saveTrack = () => {
    createTrack(name, locations);
  };

  // exposing function for any component to use to save a track
  return [saveTrack];
};
