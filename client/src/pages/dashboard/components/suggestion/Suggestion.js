import React from "react";
import haversine from "haversine";
import { capFirstChar } from "../../../../utils/commons";
import "./css/Suggestion.css";

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
    <li
      data-id={suggestion._id}
      key={suggestion._id}
      onClick={(e) => addToSendList(e)}
      className="user-result"
    >
      <img className="send-avatar-icon" src={suggestion.image} />
      <div class="suggestion-items">
        <span className="suggestion-name">
          {`${capFirstChar(suggestion.firstName)} ${capFirstChar(
            suggestion.lastName
          )}`}
        </span>
        <span className="suggestion-distance">
          {`${distanceBetween(suggestion).toFixed(1).toString()} miles `}
        </span>
      </div>
    </li>
  );
}

export default Suggestion;
