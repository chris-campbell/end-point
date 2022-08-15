const searchHandler = (
  searchTerm,
  setSearchTerm,
  setResults,
  setSuggestions,
  contacts
) => {
  setSearchTerm(searchTerm);

  if (searchTerm !== "") {
    const newContactList = contacts.filter((contact) => {
      Object.values(contact);
      return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setResults(newContactList);
    setSuggestions(true);
  } else {
    setResults([]);
    setSuggestions(false);
  }
};

export default searchHandler;
