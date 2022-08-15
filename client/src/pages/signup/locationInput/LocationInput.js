import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import InputContainer from "./styles/styles";

const LocationInput = ({ setState, form }) => {
  const { address } = form;

  const handleSelect = async (value) => {
    const geo = await geocodeByAddress(value);
    const latlng = await getLatLng(geo[0]);

    setState(latlng, "coordinates");
    setState(value, "address");
  };

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={(e) => setState(e, "address")}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="location-input">
            <InputContainer
              {...getInputProps({
                placeholder: "",
              })}
              name="location"
              variant="outlined"
              placeholder="1 New York Plaza, FDR Drive, New York, NY"
            />

            <div>
              {loading ? <div>...loading</div> : null}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      style,
                    })}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default LocationInput;
