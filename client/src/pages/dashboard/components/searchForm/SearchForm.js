import React from "react";
import SuggestionInput from "../suggestionInput/SuggestionInput";
import styled from "styled-components";

const SearchFormContainer = styled.form`
  padding: 1rem 0 3rem 0;
`;

const SearchForm = ({ input, searchTerm, getSearchTerm }) => {
  return (
    <SearchFormContainer>
      <SuggestionInput
        inputElement={input}
        searchTerm={searchTerm}
        getSearchTerm={getSearchTerm}
      />
    </SearchFormContainer>
  );
};

export default SearchForm;
