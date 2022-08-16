import React from "react";
import Suggestion from "../suggestion/Suggestion";
import styled from "styled-components";

const ContactSuggestions = styled.div`
  background-color: #ffc107;
  position: absolute;
  max-width: 50%;
  width: 100%;
  border-radius: 1rem;
  max-height: 250px;
  overflow: scroll;
  height: auto;
  box-shadow: 10px 10px 24px -7px rgba(0, 0, 0, 0.78);
  -webkit-box-shadow: 10px 10px 24px -7px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: 10px 10px 24px -7px rgba(0, 0, 0, 0.78);
  top: 275px;
  ul {
    padding-left: 0;
    padding: 1rem;
    margin-bottom: 0.5rem;
  }
`;

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
    <ContactSuggestions>
      {searchResults.length > 0 ? (
        <ul ref={suggestionBox}>{suggestions()}</ul>
      ) : (
        <ul ref={suggestionBox} style={{ display: "none" }}></ul>
      )}
    </ContactSuggestions>
  );
};

export default ContactSuggestionList;
