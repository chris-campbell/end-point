import React, { useRef } from "react";
import Suggestion from "../suggestion/Suggestion";
import useOutsideAlert from "../../../../hooks/useOutsideAlert";
import ContactSuggestions from "./styles/styles";

const ContactSuggestionList = ({
  searchResults,
  suggestionBox,
  currentUserLocation,
  addToSendList,
  showSuggestionArea,
  reset,
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlert(wrapperRef, reset);

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
    <ContactSuggestions ref={wrapperRef}>
      {(searchResults.length > 0) & showSuggestionArea ? (
        <ul ref={suggestionBox}>{suggestions()}</ul>
      ) : (
        <ul ref={suggestionBox} style={{ display: "none" }}></ul>
      )}
    </ContactSuggestions>
  );
};

export default ContactSuggestionList;
