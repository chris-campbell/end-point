import React from "react";
import SuggestionInputContainer from "./styles/styles";

function SuggestionInput({ inputElement, searchTerm, getSearchTerm }) {
  return (
    <SuggestionInputContainer
      ref={inputElement}
      value={searchTerm}
      placeholder="Type a name..."
      onChange={() => getSearchTerm()}
    />
  );
}

export default SuggestionInput;
