import React from "react";
import SuggestionInput from "../suggestionInput/SuggestionInput";

const SearchForm = ({ input, searchTerm, getSearchTerm }) => {
  return (
    <form>
      <SuggestionInput
        inputElement={input}
        searchTerm={searchTerm}
        getSearchTerm={getSearchTerm}
      />
    </form>
  );
};

export default SearchForm;
