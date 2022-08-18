import React from "react";
import SuggestionInput from "../suggestionInput/SuggestionInput";
import SearchFormContainer from "./styles/styles";

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
