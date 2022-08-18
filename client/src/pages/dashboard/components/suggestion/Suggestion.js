import React from "react";
import haversine from "haversine";
import { capFirstChar } from "../../../../utils/commons";
import SuggestionContainer from "./styles/styles";

function Suggestion({ suggestion, addToSendList, currentUserLocation }) {
  const distanceBetween = (user) => {
    const { latitude, longitude } = currentUserLocation;

    const searchedUserCoords = {
      latitude: user.coordinates.lat,
      longitude: user.coordinates.lng,
    };

    const currentUserCoords = {
      latitude: latitude,
      longitude: longitude,
    };

    return haversine(currentUserCoords, searchedUserCoords, {
      unit: "mile",
    });
  };

  return (
    <SuggestionContainer
      data-id={suggestion._id}
      key={suggestion._id}
      onClick={(e) => addToSendList(e)}
    >
      <img src={suggestion.image} />
      <div className="suggestion-short-details">
        <span className="suggestion-name">
          {`${capFirstChar(suggestion.firstName)} ${capFirstChar(
            suggestion.lastName
          )}`}
        </span>
        <span className="suggestion-distance">
          {` ${distanceBetween(suggestion).toFixed(1).toString()} miles away `}
        </span>
      </div>
    </SuggestionContainer>
  );
}

export default Suggestion;
