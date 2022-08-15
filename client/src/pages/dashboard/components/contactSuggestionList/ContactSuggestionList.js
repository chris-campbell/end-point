import React from "react";
import Suggestion from "../suggestion/Suggestion";

const ContactSuggestionList = ({
  searchResults,
  suggestionBox,
  currentUserLocation,
  addToSendList,
}) => {
  const suggestions = () => {
    return searchResults.map((suggestion) => (
      <Suggestion
        suggestion={suggestion}
        addToSendList={addToSendList}
        currentUserLocation={currentUserLocation}
      />
    ));
  };

  return (
    <div className="contact-suggestion-list">
      {searchResults.length > 0 ? (
        <ul id="suggestions" ref={suggestionBox} style={{ display: "block" }}>
          {suggestions()}
        </ul>
      ) : (
        <ul
          id="suggestions"
          ref={suggestionBox}
          style={{ display: "none" }}
        ></ul>
      )}
    </div>
  );
};

export default ContactSuggestionList;
