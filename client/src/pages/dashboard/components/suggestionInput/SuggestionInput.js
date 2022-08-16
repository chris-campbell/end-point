import React from "react";
import "./css/SuggestionInput.css";
import styled from "styled-components";

const SuggestionInputContainer = styled.input`
  height: 3.5rem;
  width: 100%;
  border-radius: 2rem;
  padding-left: 1.5rem;
  font-size: 1.2rem;
  border: 2px solid var(--primary-color-red);
`;

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
