import React from "react";
import "./css/SuggestionInput.css";
import styled from "styled-components";

const SuggestionInputContainer = styled.input`
  height: 3.5rem;
  width: 100%;
  border-radius: 0.2rem;
  background-color: #f2f2f2;
  padding-left: 1.5rem;
  font-size: 1.3rem;
  letter-spacing: 0.02rem;
  border: 2px solid transparent;
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
